import { CSSProperties } from 'react';
import clsx from 'clsx';
import './styles/SendButton.css';

export default function SendMessage({
  disabled = false,
  onSend,
  style
}: {
  disabled: boolean;
  style?: CSSProperties;
  onSend: () => void;
}) {
  return (
    <div
      className={clsx(
        'cursor-pointer flex justify-center items-center rounded-md w-10 h-8',
        disabled && 'text-gray-400 cursor-not-allowed',
        !disabled && 'transition-all hover:scale-110' // Add hover scale effect
      )}
      style={style}
      onClick={!disabled ? onSend : undefined}
    >
      <SendIcon color={style?.color} disabled={disabled} />
    </div>
  );
}

function SendIcon({
  color = 'rgba(0,255,255,1)', // Default to neon cyan
  disabled
}: {
  color?: string;
  disabled: boolean;
}) {
  return (
    <svg
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="4020"
      width="24"
      height="24"
      className={`transition-all ${!disabled ? 'hover:shadow-glow' : ''}`}
    >
      <path
        d="M0 1024l106.496-474.112 588.8-36.864-588.8-39.936L0 0l1024 512z"
        fill={disabled ? '#9ca3af' : color}
        p-id="4021"
      />
    </svg>
  );
}
