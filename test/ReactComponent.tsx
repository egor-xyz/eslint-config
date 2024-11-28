import { type FC, type PropsWithChildren, useMemo, useState } from 'react';

import { Test } from './Test';

const myArray = [5, 1, 2, 3];
const SingleLineJSX = <p>Hello</p>;

type T2 = { a: string } & { b: string };
type T = 'DeletedAt' | 'DeleteForever';

declare const foo2: string;
const test1 = foo2.startsWith('a'); // text[0] === 'a';
const test2 = foo2.endsWith('b');
console.log(test1, test2);

/thing/.exec('something'); // 'something'.match(/thing/);

const myObject = { a: 1, b: 3, c: 2 };
const mArray = [
  'Headphones',
  'Laptop',
  'Tablet',
  'Monitor',
  'Drone',
  'Keyboard',
  'Mouse',
  'Router',
  'Smartphone',
  'Smartwatch'
];
console.log(mArray, myObject);

type Props = {
  active?: boolean;
  lastName: string;
  name: string;
  onClick: () => void;
};

// @ts-ignore With description
export type { ExampleGroup, Props, T, T2 };

const ReactComponent: FC<PropsWithChildren<Props>> = ({ active, children, lastName, name, onClick }) => (
  <>
    <button onClick={onClick}>
      React Component {name} {lastName} {active ? 'active' : 'inactive'}
    </button>

    <Test />
    {children}
  </>
);

const Button = ({ className, onClick }: { className?: string; onClick?: () => void }) => (
  <button
    className={className}
    onClick={onClick}
  >
    Button {SingleLineJSX}
  </button>
);

export const App = () => {
  const [active] = useState<boolean>(true);

  const sort = useMemo(() => (active ? [1] : []), [active]);
  console.log(sort);

  return (
    <>
      {active && (
        <>
          <ReactComponent
            active
            lastName="Doe"
            name="John"
            onClick={() => {
              console.log('clicked');
            }}
          >
            Test <span>{SingleLineJSX}</span>
          </ReactComponent>

          <Button />
          <Button />
        </>
      )}

      <>{'expression'}</>

      <div>
        <a
          href="https://example.com"
          rel="noreferrer"
          target="_blank"
        >
          Example
        </a>

        <div>test</div>
      </div>

      <div className="a">test</div>

      {myArray.map((item) => (
        <div key={item}>{item}</div>
      ))}
    </>
  );
};
