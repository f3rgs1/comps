import className from 'classnames';

function Button({ 
    children,
    primary,
    secondary,
    success,
    danger,
    warning,
    outline,
    rounded,
}) {
  const classes = className('px-3 py-1.5 border', {
      'bg-blue-500 text-white border-blue-500': primary,
      'bg-gray-900 text-white border-gray-900': secondary,
      'bg-green-500 text-white border-green-500': success,
      'bg-red-500 text-white border-red-500': danger,
      'bg-yellow-400 text-white border-yellow-400': warning,
      'text-black border-black': outline,
      'rounded-full': rounded 
  });

  return <button className={classes}>{ children }</button>;
}

export default Button;
