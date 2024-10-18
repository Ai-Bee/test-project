import React from 'react'
import styles from '../styles/BaseButton.module.css'

interface BaseButtonProps {
    label: string;
    variant: 'filled-blue' | 'filled-white' | 'green';
    onClick: React.MouseEventHandler<HTMLButtonElement>;  // PropTypes.func.isRequired,
  
}

export default function BaseButton({ label, variant, onClick }: BaseButtonProps) {
  return (
    <button
      className={`${styles['base-button']} ${styles[variant]}`}
      onClick={onClick}
    >
      {label}
    </button>
  )
}

