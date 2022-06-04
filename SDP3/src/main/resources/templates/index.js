class Lifecycle extends React.Component{
    constructor(){
      super();
      this.state={value:"welcome",name:"students"}
   
   }
   componentWillMount()
   {
   alert("React Life cycle will mount phase")
   }
   render(){
       return<div>
       <h1>{this.state.value} {this.state.name}</h1>
       <br/>
       <button type="button" onClick={this.changevalue}>change value</button>
       </div>
   }
   changevalue =() =>
   {
      this.setstate({value:"we changed value"});
   }
   compnentDidMount()
   {
     setTimeout(() =>
                 this.setState({value:'thank you'}),5000)
   }
   compnentwillupdate()
   {
   alert("Do u want to update a new value");
   }
   componentDidUpdate()
   {
     document.getElementById("mydiv").innerHTML="New value updated"+this.state.value;
   }
   }
   ReactDom.render(<Lifecycle/>,document.getElementById('root'));
   {
       
   }