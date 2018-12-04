# NAPA.JS DEMO
if you dont know what is napa.js, you can check it out [here](https://github.com/Microsoft/napajs)
Also to know more about it, start from napa.js [wiki page](https://github.com/Microsoft/napajs/wiki/introduction)
I got to this page after creating first example.

## There is a Sunnah: Start from the easiest task.

So I am starting from the very basic example that they provided and try to learn from it.

Note: I am also leaving code comments, and you can find references there.

### Example-1
#### Output

[![N|Solid](https://github.com/muhammadfaizan/napajs-demo/blob/master/example-1/example-1-output.png?raw=true)](https://github.com/muhammadfaizan/napajs-demo/blob/master/example-1/example-1-output.png)

I think the output is funnyy, as it logged *hello world* 4 times without linefeed and then pushes all 4 linefeeds *\n* are pushed together, and after that it logs *hello napa* in the end. Well I tried running it again and got a different output, this time it logged 3 *hello world* on different lines and 4th one followed 3rd one without a linefeed, and then hello napa was printed after 1 blank line space.

![N|Solid](https://github.com/muhammadfaizan/napajs-demo/blob/master/example-1/example-1-output-2.png?raw=true)


May be we will find answers when we fall deeper, I think they are returning data to main thread in a stream, and a linefeed is getting disrupted by another thread input.
So it means its concurrent and we can expect such sequences.

**Right now I am curious about how zone.execute works?**


## Example : long processing thread

Here I am trying to modify an array of array, by slicing it up and passing it to thread, what I noticed is, that some data is not changing, while other is.

    Output

![N|Solid](https://github.com/muhammadfaizan/napajs-demo/blob/master/long-processing-threads/long-process-threads-output.png?raw=true)

as you may notice it worked well and the process were working simultaneously and improved our plan. however I could not find why the output was a little off.. will check it out later.