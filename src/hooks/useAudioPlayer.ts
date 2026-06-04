import { useRef, useState, useCallback, useEffect } from 'react';

interface AudioState {
  isPlaying: boolean;
  isLoading: boolean;
  volume: number;
  isMuted: boolean;
  error: string | null;
}

export function useAudioPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const sourceRef = useRef<MediaElementAudioSourceNode | null>(null);
  const [state, setState] = useState<AudioState>({
    isPlaying: false,
    isLoading: false,
    volume: 0.8,
    isMuted: false,
    error: null,
  });

  const getAnalyser = useCallback(() => analyserRef.current, []);

  const setupAudioContext = useCallback(() => {
    if (!audioRef.current) return;
    if (!audioContextRef.current) {
      const ctx = new AudioContext();
      audioContextRef.current = ctx;
      const analyser = ctx.createAnalyser();
      analyser.fftSize = 128;
      analyserRef.current = analyser;
      try {
        const source = ctx.createMediaElementSource(audioRef.current);
        source.connect(analyser);
        analyser.connect(ctx.destination);
        sourceRef.current = source;
      } catch {
        // Already connected or cross-origin issue
      }
    }
    if (audioContextRef.current.state === 'suspended') {
      audioContextRef.current.resume();
    }
  }, []);

  const play = useCallback((url: string) => {
    if (!audioRef.current) {
      audioRef.current = new Audio();
      audioRef.current.crossOrigin = 'anonymous';
    }

    const audio = audioRef.current;

    // If same URL, just toggle play
    if (audio.src === url && state.isPlaying) {
      audio.pause();
      setState(prev => ({ ...prev, isPlaying: false, isLoading: false }));
      return;
    }

    if (audio.src === url && !state.isPlaying) {
      setupAudioContext();
      audio.play().then(() => {
        setState(prev => ({ ...prev, isPlaying: true, isLoading: false, error: null }));
      }).catch(() => {
        setState(prev => ({ ...prev, error: 'Playback failed' }));
      });
      return;
    }

    // New URL
    setState(prev => ({ ...prev, isLoading: true, error: null, isPlaying: false }));
    audio.pause();
    audio.src = url;
    audio.volume = state.volume;
    audio.muted = state.isMuted;

    setupAudioContext();

    const onCanPlay = () => {
      audio.play().then(() => {
        setState(prev => ({ ...prev, isPlaying: true, isLoading: false, error: null }));
      }).catch(() => {
        setState(prev => ({ ...prev, isLoading: false, error: 'Playback blocked' }));
      });
    };

    const onError = () => {
      setState(prev => ({ ...prev, isLoading: false, error: 'Stream unavailable', isPlaying: false }));
    };

    const onEnded = () => {
      setState(prev => ({ ...prev, isPlaying: false }));
    };

    audio.addEventListener('canplay', onCanPlay, { once: true });
    audio.addEventListener('error', onError, { once: true });
    audio.addEventListener('ended', onEnded, { once: true });
  }, [state.volume, state.isMuted, state.isPlaying, setupAudioContext]);

  const togglePlay = useCallback(() => {
    if (!audioRef.current) return;
    if (state.isPlaying) {
      audioRef.current.pause();
      setState(prev => ({ ...prev, isPlaying: false }));
    } else {
      setupAudioContext();
      audioRef.current.play().then(() => {
        setState(prev => ({ ...prev, isPlaying: true, error: null }));
      }).catch(() => {
        setState(prev => ({ ...prev, error: 'Playback failed' }));
      });
    }
  }, [state.isPlaying, setupAudioContext]);

  const setVolume = useCallback((vol: number) => {
    if (audioRef.current) {
      audioRef.current.volume = vol;
    }
    setState(prev => ({ ...prev, volume: vol }));
  }, []);

  const toggleMute = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.muted = !state.isMuted;
    }
    setState(prev => ({ ...prev, isMuted: !prev.isMuted }));
  }, [state.isMuted]);

  const stop = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.src = '';
    }
    setState(prev => ({ ...prev, isPlaying: false, isLoading: false, error: null }));
  }, []);

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = '';
      }
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, []);

  return {
    ...state,
    play,
    togglePlay,
    setVolume,
    toggleMute,
    stop,
    getAnalyser,
  };
}
