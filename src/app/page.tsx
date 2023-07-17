import { css, cva } from '../../styled-system/css'
import { styled } from '../../styled-system/jsx'

const buttonRecipe = cva({
  base: { cursor: 'pointer', margin: '4' },
  variants: {
    visual: {
      solid: { bg: 'red.500', color: 'white' },
      outline: { borderWidth: '1px', borderColor: 'red.500' },
    },
    size: {
      sm: { padding: '4', fontSize: '12px' },
      lg: { padding: '8', fontSize: '20px' },
    },
  },
  compoundVariants: [
    {
      visual: 'outline',
      size: 'lg',
      css: {
        borderWidth: '8px',
        borderColor: 'black',
      },
    },
  ],
  defaultVariants: { visual: 'outline', size: 'lg' },
})

const Button = styled('button', buttonRecipe)

const Home = () => {
  return (
    <>
      <div className={css({ fontSize: '2xl', fontWeight: 'bold', margin: '4' })}>Hello, Panda!!</div>
      <button className={buttonRecipe({ size: 'sm' })}>Hello, Panda!!</button>
      <div></div>
      <Button visual='solid'>Hello, Panda Component!!</Button>
    </>
  )
}

export default Home
