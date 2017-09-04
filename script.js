// // Code goes here

// var work = function() {
//   console.log('working');
// };

// work();

// var doWork = function(f) {
//   try {
//     f();
//   } catch (ex) {
//     console.log(ex);
//   }
// };

// doWork(work);

var createWorker = function() {
  var task1 = function() {
    console.log('task 1');
  }
  var task2 = function() {
    console.log('task 2')
  }
  return {
    job1: task1,
    job2: task2
  }

}

var worker = createWorker();
worker.job1();
worker.job2();