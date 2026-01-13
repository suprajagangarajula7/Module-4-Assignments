1  Node.js Architecture
Javascript V8 : It converts JavaScript code into machine code, also executes JavaScript very fast
Node.js Core APIs: NodeJs provides builtin feature that the browser don't provide
Native bindings:JavaScript cannot directly talk to the OS.No native building is bridge between JavaScript and C/C++ code which is written using C++
Event Loop: event loop is what makes Node.js non-blocking by excecuting the code asynchronously. 

2 libuv
libuv is a low-level C library that Node.js uses to handle asynchronous operations. JavaScript by itself cannot talk directly to the operating system. So we use libuv where as Node.js is built on a single-threaded JavaScript model.


3  Thread Pool
A thread pool is a group of background worker threads that are kept ready to do work.Node.js uses a libuv-managed thread pool to handle blocking operations like file system access, cryptography, DNS, and compression so the single-threaded event loop remains responsive.

4 Worker Threads
Worker threads allow Node.js to run JavaScript code in parallel.
Normally, Node.js runs all JavaScript on one main thread.
With worker threads, you can create additional threads, and each thread can execute JavaScript independently.

5 Event Loop Queues
When Node.js runs JavaScript, it uses the event loop to decide what to execute next.
Macro Task Queue:The macro task queue stores larger async tasks that are scheduled to run later.Ex: setTimeout,setInterval()
Micro Task Queue: The micro task queue stores high-priority tasks that must run immediately after the current code finishes. Ex: Promise.then(), Promise.catch()

