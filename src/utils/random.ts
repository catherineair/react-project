export function getRandomNumber(min: number,max: number,isMinInclusive: boolean = true,isMaxInclusive: boolean = false): number 
  {
  if (max < min) 
  {
    [min, max] = [max, min];
  }

  if (max === min && (!isMinInclusive || !isMaxInclusive)) 
  {
    throw new Error("min may not be equal to max");
  }

  const minValue = isMinInclusive ? min : min + 1;
  const maxValue = isMaxInclusive ? max : max - 1;
  return Math.floor(Math.random() * (maxValue - minValue + 1) + minValue);
  }

  export function getRandomMatrix(rows: number,columns: number,min: number,max: number): number[][] 
  {
  const matrix: number[][] = [];
  for (let i = 0; i < rows; i++) 
  {
    /* V.R. implementation with 'push' isn't effective.
    More effective implementation wwas shown in the seminar
    */
        const row: number[] = [];
    for (let j = 0; j < columns; j++) {
      row.push(getRandomNumber(min, max, true, true));
    }
    matrix.push(row);
  }

  return matrix;
  }

  export function getRandomArrayElement(array: any[]): any
  {
  return array[getRandomNumber(0, array.length - 1, true, true)];
  }

  export function getRandomDate(minYear: number, maxYear: number): Date
  {
  const randomYear = getRandomNumber(minYear, maxYear, true, false);
  const randomMonth = getRandomNumber(0, 11, true, true);
  /* V.R. Very simple case will also work
  onst randomDay = getRandomNumber(1, 31, true, true);
  The result is suitable for all of monthes because Date is very smart
  */
  const randomDay = getRandomNumber(
    1,
    new Date(randomYear, randomMonth + 1, 0).getDate(),
    true,
    true
  );
  return new Date(randomYear, randomMonth, randomDay);
  }