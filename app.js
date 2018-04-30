var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

var rooms=[];
rooms.push({
  src:"/img/dadaroom1.jpg",
  title:"다다룸입니다",
  price:"25,000",
  imgList:["/img/dadaroom2.jpg","/img/dadaroom3.jpg","/img/dadaroom4.jpg","/img/dadaroom5.jpg","/img/dadaroom6.jpg"],
  content:"우리만의 특별한 공간, 소규모 파티가 가능한 곳 생일파티, 브라이덜샤워, 원데이클래스, 스터디, 연말모임 등 다양하게 사용이 가능합니다. 미니 키친이 있어 간단한 요리도 ok ! 배달음식도 ok ! 따뜻한 프라이빗한 공간, 다다룸으로 파티하러 놀러오세요.",
  con:"내부 화장실, 간단한 요리 가능 (전기인덕션, 미니냉장고, 전자레인지)",
  clean:"10000원",
  add:"최대 6인(추가인원 받지 않습니다.)",
  cancel:"예약일 3일전까지 가능",
  rule:"100% 환불:예약일 8일전 70% 환불: 예약일 7-6일전 50%환불 예약일 5-4일전",
  checkIn:"오후 6:00",
  checkOut:"오후 12:00",
  size:"10평",
  min:"2박",
  max:"8박"
});

rooms.push({
  src:"/img/rillstudio1.jpg",
  title:"릴 스튜디오",
  price:"30,000",
  imgList:["/img/rillstudio2.jpg","/img/rillstudio3.jpg","/img/rillstudio4.jpg","/img/rillstudio5.jpg","/img/rillstudio6.jpg"],
  content:" 소규모 파티에 적합한 파티룸 입니다. 3인에서 최대 13인 모임에 적합한 공간입니다.",
  con:"실내 화장실 , 흡연 2층 현관 앞",
  clean:"15000원",
  add:"최대 15인",
  cancel:"예약일 3일전까지 가능",
  rule:"100% 환불:예약일 8일전 70% 환불: 예약일 7-6일전 50%환불 예약일 5-4일전",
  checkIn:"오후 7:00",
  checkOut:"익일 오후 7:00",
  size:"17평(건물의 2층​)",
  min:"1박",
  max:"5박"
});

rooms.push({
  src:"/img/iam1.jpg",
  title:"아이엠퍼샌트",
  price:"40,000",
  imgList:["/img/iam2.jpg","/img/iam3.jpg","/img/iam4.jpg","/img/iam5.jpg","/img/iam6.jpg"],
  content:" 강남역과 역삼역 부근에 위치한 복합 문화 공간입니다. 강연, 파티, 소규모 모임, 원데이클래스, 기업행사, 세미나, 브라이덜 샤워 등 다양한 공간으로 즐기실 수 있습니다.",
  con:"주류반입 가능, 음향/마이크 사용 가능",
  clean:"5000원",
  add:"최대 10인",
  cancel:"예약일 3일전까지 가능",
  rule:"100% 환불:예약일 8일전 70% 환불: 예약일 7-6일전 50%환불 예약일 5-4일전",
  checkIn:"오후 6:00",
  checkOut:"익일 오후 5:00",
  size:"21평",
  min:"1박",
  max:"3박"
});

rooms.push({
  src:"/img/underground1.jpg",
  title:"언더그라운드",
  price:"35,000",
  imgList:["/img/underground2.jpg","/img/underground3.jpg","/img/underground4.jpg","/img/underground5.jpg","/img/underground6.jpg"],
  content:"홍대 상상마당 근처에 위치한 펍 공간입니다.",
  con:"주류반입 가능, 음향/마이크 사용 가능",
  clean:"0원",
  add:"최대 8인",
  cancel:"예약일 3일전까지 가능",
  rule:"100% 환불:예약일 8일전 <br />70% 환불: 예약일 7-6일전 <br />50%환불 예약일 5-4일전",
  checkIn:"오후 12:00",
  checkOut:"익일 오후 1:00",
  size:"12평",
  min:"1박",
  max:"2박"
});
//rooms 정보넘겨주기
app.get("/teamP/rooms",function(req,res){
  res.json(rooms);
});

//자세히보기 요청에대한 응답
app.get("/teamP/rooms/detail",function(req,res){
  //요청파라미터 추출
  var index=req.query.index;
  //응답
  var obj=rooms[index];
  res.json(obj);
});

app.get("/angular/girls",function(req,res){
  res.json(girls);
});

//DB에 있는 members 가정
var members = [];

members.push({
  name:"허조은",
  phone:"010-0000-0000",
  date:"2017/11/12",
  checkin:"18:00",
  checkout:"21:00",
  spot:"언더그라운드",
  room:"101호"
});

members.push({
  name:"김하야나",
  phone:"010-0000-0000",
  date:"2017/11/14",
  checkin:"00:00",
  checkout:"04:00",
  spot:"나나하우스",
  room:"105호"
});

members.push({
  name:"권하경",
  phone:"010-0000-0000",
  date:"2017/11/11",
  checkin:"06:00",
  checkout:"11:00",
  spot:"블랑",
  room:"201호"
});

members.push({
  name:"문지상",
  phone:"010-0000-0000",
  date:"2017/12/12",
  checkin:"15:00",
  checkout:"23:00",
  spot:"아이앰퍼샌드",
  room:"1001호"
});

members.push({
  name:"조한솔",
  phone:"010-0000-0000",
  date:"2017/12/11",
  checkin:"19:00",
  checkout:"23:00",
  spot:"쉐어원 라운지",
  room:"1001호"
});

  app.post("/angular/confirm", function(req, res){
  var name = req.body.name;
  var phone = req.body.phone;
  var index = -1;
  var obj;

  for(i = 0; i < members.length ; i++){
    var name1 = members[i].name;
    var phone1 = members[i].phone;

    if(name1 == name && phone1 == phone){
      index = i;
    }
  }

  if(index != -1){
    obj = members[index];
  }
  else{
    obj = {name:"예약 되어 있지 않습니다!"};
  }

  res.json(obj);

});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
