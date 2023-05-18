let person2 = {
    context: this,
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
        console.log('context', this.context)
        console.log('fullname', this)
        let fn = function xx() { console.log('Function', this); }
        let arrowfn = () => {
          console.log('arrowfn', this)
        }
        let variable = {
            firstNameVariable: 'Me',
            fullName: function() {
                let myVar = 12
                console.log('fullname Variable', this)
                let fn = function xx() { console.log('Function Variable', myVar, this); }
                let arrowfn = () => {
                  console.log('arrowfn Variable', this)
                }
  
                fn();
                arrowfn();
            }
        }
        
        fn();
        arrowfn();
      return variable;
    },
  };
  
  let fullName = person2.fullName()
  fullName.fullName()
  
  
  
  class person3 {
    context = this;
    firstName = "John";
    lastName = "Doe";
    id = 5566;
    id22 = this.id;
    fullName() {
        console.log('context', this.context)
        console.log('fullname', this)
        let fn = function xx() { console.log('Function', this); }
        let arrowfn = () => {
          console.log('arrowfn', this)
        }
        let variable = {
            firstNameVariable: 'Me',
            fullName: function() {
                let myVar = 12
                console.log('fullname Variable', this)
                let fn = function xx() { console.log('Function Variable', myVar, this); }
                let arrowfn = () => {
                  console.log('arrowfn Variable', this)
                }
  
                fn();
                arrowfn();
            }
        }
        
        fn();
        arrowfn();
      return variable;
    }
  };
  
  new person3().fullName().fullName()