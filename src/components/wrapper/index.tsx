const WrapperComponent = ({children}: {children: React.ReactNode}) => {
    return (
     <div>
        <h1>Wrapper component</h1>
 {children}
     </div>
         
    )   
  }
  export default WrapperComponent