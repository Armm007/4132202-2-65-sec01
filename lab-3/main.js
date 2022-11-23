
    var num = 10;
    let name = "Arm" ;
    //let Array = [10,15,"Arm"];
    const obj = {name: "Arm", age:19};
    const objMix = {
        data:[
            {name: "Doo", gpa: 3.9},
            {name: "Dan", gpa: 2.7},
        ] , 
    } ;

    console.log(num);
    console.log(Array);
    console.log(objMix);

    let string = num + name;
    console.log(string);

    string = objMix.data[1].name + Array[0];
    console.log(string);

    string = "<p>" + Array[2] + "</p>";
    string = `<p>${Array}</p>`;

    console.log(string);

    function Add(a,b){
        return a + b;
    }

    console.log(Add(3,5))

    document.getElementById("div1").innerHTML = name;
    $(function (){
        //alert("Hello");
        $("#div1").html("Arm007");

        $("#bt1").click(function (){
            $("#div1").html("OOOOOO");
        });

        $("#bt3").click(()=>{
            $("#.in1:even").val("BRU");
        });

        $("#bt4").click(()=>{
            $("#.in1:odd").addClass("red");
        });

        $("#div_about").load("./pages/about.html");

      }); //jQuery Handle
