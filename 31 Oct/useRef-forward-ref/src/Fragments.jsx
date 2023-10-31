import React from 'react'


//Fragments

//when we need a single element we wrap elements in fragment
//grouping elements in fragment has no effect on the dom


//Case 1 => to return multiple elements


// function App() {
//     return (
//         <>
//             <Header/>
//             <Banner/>
//         </>

//     )
// }

// export default App

//case 2 when u need to assign multiple elements inside a varible

// const buttons = (
//     <>
//         <AddButton/>
//         <CancelButton/>
//     </>
// )

//case 3 => group elements and text with each other


// function App(){

//     return(
//         <>  
//             Hi My name is :
//             <Greetings/>
//             Thank you
//         </>
//     )
// }


//case 4 => rendering list of items


// function Main(){

//     return posts.map((post) => (
//         <React.Fragment key={post.id} >
//             <PostTitle post={post}/>
//             <PostContent post={post}/>
//         </React.Fragment>
//     ))
// }
