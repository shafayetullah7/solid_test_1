import { createEffect, createSignal, type Component } from 'solid-js';
import { Counter } from './components/Counter';

const App: Component = () => {

  const handler = (data: string, event: Event) => {
    console.log(data, event);
  }

  return (
    <div class='w-full'>
      <Counter></Counter>
      <Counter></Counter>
      <button onClick={[handler, 'clicked now']}>Click me</button>
    </div>
  );
};

export default App;
