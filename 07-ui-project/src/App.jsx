import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {

  const users = [
    {img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' , 
      intro:'',
      color:'royalblue',
    tag:'Satisfied'},

    {img:'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      color:'lightseagreen',
      tag:'UnderServed'
    },

    {img:'https://images.unsplash.com/photo-1498758536662-35b82cd15e29?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D',
      intro:'',
        color:'orange ',
      tag:'Underbanked'
    },

    {img:'https://plus.unsplash.com/premium_photo-1661430668786-9a7c1d321380?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
        color:'pink',
      tag:'Underband'
    },
     {img: 'https://plus.unsplash.com/premium_photo-1661627107220-d497881c7a62?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' , 
      intro:'',
        color:'black',
    tag:'Average'}
  ]

  return (
    <div>
      <Section1 users={users} />
      <Section2 />
    </div>
  )
}

export default App
