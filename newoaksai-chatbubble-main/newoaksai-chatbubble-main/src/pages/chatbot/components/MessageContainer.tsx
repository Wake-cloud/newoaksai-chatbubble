import { HTMLAttributes, LegacyRef, forwardRef } from 'react';
import './styles/MessageContainer.css';

function MessageContainer(
  { className, ...props }: HTMLAttributes<HTMLDivElement>,
  ref: LegacyRef<HTMLDivElement>
) {
  return (
    <div
      {...props}
      ref={ref}
      className={`flex flex-col flex-1 overflow-y-auto overscroll-none px-4 relative
        bg-black bg-opacity-60 rounded-lg 
        ${className}`} // Apply additional custom styles passed through the className
      style={{
        // Custom Cyberpunk Scrollbar styling (neon effect)
        scrollbarWidth: 'thin',
        scrollbarColor: 'rgba(0,255,255,0.8) transparent',
      }}
    />
  );
}

export default forwardRef(MessageContainer);

