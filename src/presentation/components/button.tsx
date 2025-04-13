import { PropsWithChildren, ReactElement } from 'react';

interface ButtonProps extends PropsWithChildren {
    onClick: VoidFunction;
    disabled?: boolean;
}
export function Button({ onClick, disabled, children }: ButtonProps): ReactElement {
  return (
    <button
      onClick={ onClick }
      disabled={ disabled }
      className="bg-gray-200 px-4 py-2 rounded disabled:opacity-50"
    >
      { children }
    </button>
  );
}
