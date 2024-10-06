import React,{Component} from "react"; 
export default class App extends Component{
 constructor(){
  super()
  this.state={
    users:[],
    heading:[]
  }

 }
 componentDidMount(){
  let api=fetch("https://jsonplaceholder.typicode.com/users")
  api.then(x=>x.json()).then(x=>{
    this.setState({users:x});
    this.setState({heading:Object.keys(x[0]).slice(0,4)});
  }
).catch(()=>{console.log("api is not working properly");}) }


  render() {
   
    return(
      <>
       <div id="maindiv">
        <img src="https://cdn.pixabay.com/photo/2020/05/11/15/38/tom-5158824_1280.png" alt="tom" id="img1" />
        <img src="https://upload.wikimedia.org/wikipedia/en/2/2f/Jerry_Mouse.png" alt="jerry" id="img2" />
        <img src="https://cn.i.cdn.ti-platform.com/cnemea/content/384/showpage/tom-and-jerry/uk/showpano.png?imwidth=640" alt="tomjerry" id="img3" />
        <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4a0c5239-bb61-4e3d-9084-b72bab1df949/dg7pr61-ff6e85f8-8942-4d37-8b14-8325ac770e2b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzRhMGM1MjM5LWJiNjEtNGUzZC05MDg0LWI3MmJhYjFkZjk0OVwvZGc3cHI2MS1mZjZlODVmOC04OTQyLTRkMzctOGIxNC04MzI1YWM3NzBlMmIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.mWEIf00HviGXbwuHYJi3SMNkkOCVaCs5R6Ykj7jAC2Q" alt="jt" id="img4"/>
       <table border={2} id="tab">
          <thead>
          <tr>
            {this.state.heading.map((x,ind)=><th key={ind}>{x}</th>)}
          </tr>
          </thead>
          <tbody>
          {this.state.users.slice(0,4).map(x=>{
            return(
              <tr key={x.id}>
                 <td>{x.id}</td>
                 <td>{x.name}</td>
                 <td>{x.username}</td>
                 <td>{x.email}</td>
              </tr>
            )
          })}

          </tbody>
        </table>
       </div>
      </>
    )
  }
}