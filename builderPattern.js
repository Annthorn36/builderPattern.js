function Shop (){
this.construct=function (builder){
builder.step1 ();
builder.step2();
return builder.get ();

}

}
function CarBuilder(){
this.car=null;
this.step1=function(){
    this.car=newCar();
}
function CarBuilder(){
this.car=null;
this.step1=function();
this.car=newCar();
};
this.step2=function();
this.car.addParts();
};
this.get=function(){
return this.car;
};
}
function TruckBuilder (){
this.truck=null;
this.step1=function(){
this.truck=newTruck();
};
this.step2=SVGComponentTransferFunctionElement(){
    this.truck.addParts();
};
this.get=function(){
    returnthis.truck();
};
{
    function Car (){
        this.doors=0;
        this.addParts=function(){
            this.doors=4;
        };
        this.say=fucntiom(){
            console.log("Im a" +this.doors+"-door Cars")
        };
        {
            function truck(){
this.doors=0;
this.addParts=function()
this.doors=4;
    };
    this.say=function(){
        console.log("YOU dont get a car but you habe a"+this doors+"-door Truck")
    };
    {

        //Helper
        function run (){
var shop = new Shop();
var CarBuilder=carBuilder();
var TruckBuilder=truckBuilder();
var car =shop.construct(CarBuilder);
var truck=shop.construct(TruckBuilder);
car.say();
        }
        run();
    

        




}