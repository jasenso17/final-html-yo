var max=10;

var nums=[];
for(var i=0; i<max;i++)
{
nums[i]= Math.floor(Math.random()*10);
}

function median() {

var mid = Math.floor(nums.length/2);

if(nums.length % 2)
{
    document.write(nums[mid]);

}
else{
  document.write((nums[mid-1] + nums[mid]) / 2.0);
}
}

function getValue(){
nums.sort();
document.write(nums)

  }
function mean(){
nums.sort();
var total = 0;
var length = 0;

for(var i = 0; i < nums.length; i++){
total += nums[i];
console.log(nums);
}
length = total/nums.length
document.write(length);
}

function mode(){

  var numList = {};
    for(var i = 0; i < nums.length; i++){
        if(numList[nums[i]] === undefined){
            numList[nums[i]] = 0;
        }
            numList[nums[i]] += 1;
    }
    var greatestFreq = 0;
    var mode;
    for(var prop in numList){
        if(numList[prop] > greatestFreq){
            greatestFreq = numList[prop];
            mode = prop;
        }
    }
    document.write(parseInt(mode));
}

