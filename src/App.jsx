
import './App.css'
import { Button, Card, TextField, Typography } from '@mui/material'

import { RecoilRoot, atom, useRecoilValue, useSetRecoilState } from 'recoil';




function App() {
  return (
        <>
      <div style={{display:'flex', justifyContent: 'center'}}>
        <Card style={{width:400,padding:20}}>
        <Typography textAlign={'center'} variant={'h5'}>Welcome to counter game</Typography>
        <RecoilRoot>
        <Buttons/>
      
        <div style={{display:'flex', justifyContent: 'center', paddingTop:20}}>
          <CounterComponent/>
        </div>
        </RecoilRoot>
      </Card>
    </div>
     
    </>
  
   
  )
}
  

function Buttons(){

  return <div style={{display: 'flex', justifyContent: 'space-between'}}>
      <IncrementButton />
      <DecrementButton/>
  </div>
  
  
  
}


function IncrementButton(){
  const setCount = useSetRecoilState(countState);
  return <Button onClick={()=>{
  
    setCount((existing_count)=> existing_count+1);
  }} variant={'contained'}>increment</Button>
}


function DecrementButton(){
  const setCount = useSetRecoilState(countState);
  return <Button  onClick={()=>{
    
    
    setCount((existing_count)=> existing_count-1);
  }} variant={'contained'}>decrement</Button>
}


function CounterComponent(){
  const count = useRecoilValue(countState);
  return  <TextField value={count} style={{width:80}}variant={'outlined'}></TextField>
}
export default App


const countState = atom({
  key: 'countState',
  default: 0
});