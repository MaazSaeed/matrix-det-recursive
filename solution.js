function determinant(m)
{
  if(m.length == 1)
    return m[0][0];
  if(m.length === 2)
    return (m[0][0] * m[1][1]) - (m[0][1] * m[1][0]); 

    let topRow = m[0];

    let args = [];
    for(let i = 0; i < topRow.length; i++)
    {
      let matrix = [];

        for(let r = 1; r < topRow.length; r++)
        {
          let sub = [];
          for(let c = 0; c < topRow.length; c++)
          {
            if(c == i)
              continue;
            sub.push(m[r][c]);
          }
          matrix.push(sub);
      }
      args.push(matrix);
    }
  
    let res = 0;
    for(let i = 0, sign = 1; i < topRow.length; i++, sign *= -1)
    {
      res += determinant(args[i]) * topRow[i] * sign;
    }
  return res;
};
