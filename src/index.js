document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form")
    form.addEventListener("submit",(event) => {
      event.preventDefault()
      if(event.target["new-task-description"].value.trim())
      {
      let temp = document.createElement("li")
      temp.textContent = event.target["new-task-description"].value
      document.getElementById("list").append(temp)
      form.reset()
  
      } 
      else 
          {
          alert('invalid input you silly goose')}

      form.reset()
})});


  
   
    
    

  //     const input = document.getElementById("create-task-form");
  //     form.addEventListener("submit", function()=> {
  //       alert('invalid input'); 
  //       if(form.target["new-task-description"].value.trim()){
  //         form.addEventListener('click', function() {
  //           alert('invalid input'); 
  //     }
  //   )
  // }
   
  