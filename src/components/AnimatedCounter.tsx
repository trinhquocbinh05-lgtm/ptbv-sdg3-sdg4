import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface NumberPart {
  isNumber: boolean;
  raw: string;
  targetValue: number;
  decimals: number;
}

/**
 * AnimatedNumber:
 * Automatically detects all numbers inside any string (e.g. "223 / 100k", "4.9 Triệu", "1.6M & 249M", "> 93.3%", "0.766")
 * and smoothly animates each number from 0 to its target value with Apple/Keynote-level easeOutExpo easing.
 */
export const AnimatedNumber: React.FC<{
  text: string | number;
  duration?: number;
  className?: string;
}> = ({ text, duration = 1200, className = '' }) => {
  const textStr = String(text);
  const [display, setDisplay] = useState<string>(textStr);
  const prevTextRef = useRef<string>('');

  useEffect(() => {
    // Parse all numbers in text
    const regex = /(\d+(?:\.\d+)?)/g;
    const parts: NumberPart[] = [];
    let lastIndex = 0;
    let match: RegExpExecArray | null;

    while ((match = regex.exec(textStr)) !== null) {
      if (match.index > lastIndex) {
        parts.push({
          isNumber: false,
          raw: textStr.slice(lastIndex, match.index),
          targetValue: 0,
          decimals: 0,
        });
      }
      const numStr = match[0];
      const targetValue = parseFloat(numStr);
      const decPart = numStr.split('.')[1];
      const decimals = decPart ? decPart.length : 0;

      parts.push({
        isNumber: true,
        raw: numStr,
        targetValue,
        decimals,
      });
      lastIndex = regex.lastIndex;
    }

    if (lastIndex < textStr.length) {
      parts.push({
        isNumber: false,
        raw: textStr.slice(lastIndex),
        targetValue: 0,
        decimals: 0,
      });
    }

    // If no numbers found, just display text
    if (!parts.some((p) => p.isNumber)) {
      setDisplay(textStr);
      return;
    }

    // Initialize with 0s for numbers
    const initialString = parts
      .map((p) => {
        if (!p.isNumber) return p.raw;
        return (0).toFixed(p.decimals);
      })
      .join('');
    setDisplay(initialString);

    let startTimestamp: number | null = null;
    let animationFrameId: number;

    const easeOutExpo = (x: number): number => {
      return x >= 1 ? 1 : 1 - Math.pow(2, -10 * x);
    };

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      const progress = Math.min(1, elapsed / duration);
      const easedProgress = easeOutExpo(progress);

      const currentString = parts
        .map((p) => {
          if (!p.isNumber) return p.raw;
          const currentVal = p.targetValue * easedProgress;
          return currentVal.toFixed(p.decimals);
        })
        .join('');

      setDisplay(currentString);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        // Ensure final exact string
        setDisplay(textStr);
      }
    };

    animationFrameId = requestAnimationFrame(step);
    prevTextRef.current = textStr;

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [textStr, duration]);

  return <span className={className}>{display}</span>;
};

/**
 * AnimatedCounter:
 * Direct numerical counter animating from 0 to value.
 */
export const AnimatedCounter: React.FC<{
  value: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}> = ({ value, duration = 1200, decimals = 0, prefix = '', suffix = '', className = '' }) => {
  const [current, setCurrent] = useState<number>(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    let animationFrameId: number;

    const easeOutExpo = (x: number): number => {
      return x >= 1 ? 1 : 1 - Math.pow(2, -10 * x);
    };

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      const progress = Math.min(1, elapsed / duration);
      const easedProgress = easeOutExpo(progress);

      setCurrent(value * easedProgress);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setCurrent(value);
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [value, duration]);

  return (
    <span className={className}>
      {prefix}
      {current.toFixed(decimals)}
      {suffix}
    </span>
  );
};

/**
 * AnimatedProgressBar:
 * Smoothly animates width from 0% to the target width whenever width or component updates.
 */
export const AnimatedProgressBar: React.FC<{
  width: string | number;
  duration?: number;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
  title?: string;
  children?: React.ReactNode;
}> = ({ width, duration = 1.0, delay = 0.05, className = '', style = {}, title, children }) => {
  const widthStr = typeof width === 'number' ? `${width}%` : width.toString();

  return (
    <motion.div
      key={widthStr}
      initial={{ width: '0%' }}
      animate={{ width: widthStr }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
      style={style}
      title={title}
    >
      {children}
    </motion.div>
  );
};
