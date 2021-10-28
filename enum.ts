const enum EDirection {
    Up,
    Down,
    Left,
    Right,
  }
   
  const ODirection = {
    Up: 0,
    Down: 1,
    Left: 2,
    Right: 3,
  } as const;
   
  EDirection.Up;
             
  (enum member) EDirection.Up = 0
   
  ODirection.Up;
             
  (property) Up: 0
   
  // Using the enum as a parameter
  function walk(dir: EDirection) {}
   
  // It requires an extra line to pull out the keys
  type Direction = typeof ODirection[keyof typeof ODirection];
  function run(dir: Direction) {}
   
  walk(EDirection.Left);
  