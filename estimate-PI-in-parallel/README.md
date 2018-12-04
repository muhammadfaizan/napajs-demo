# Estimate PI in parallel
This example implements an algorithm to [estimate PI using Monte Carlo method](http://mathfaculty.fullerton.edu/mathews/n2003/montecarlopimod.html). It demonstrates how to fan out sub-tasks into multiple JavaScript threads, execute them in parallel and aggregate output into a final result.

In the implementation, multiple batches of points are evaluated simultaneously in a [napa zone](https://github.com/Microsoft/napajs/wiki/introduction#zone) of 4 workers. Results are aggregated to calculate the final PI after all batches finishes.

## How to run
3. Run `node estimate-pi-in-parallel`

## Program output
The table below shows results of PI calculated under different settings, each setting emulates 4,000,000 points evaluated by a napa zone of 4 workers. 

These 4,000,000 points are divided into multiple batches, each setting differs only in number of batches. For settings (1-batch, 2-batch, and 4-batch) whose batch number is less than the worker number, total latency is proportional to the number of batches, that means we have enough workers to pick up coming batches. On the contrary, the 8-batch setting cannot scale linearly due to insufficient free worker, which is expected.
```
        # of points     # of batches    # of workers    latency in MS   estimated π     deviation
        ---------------------------------------------------------------------------------------
        4000000         1               4               171             3.142598        0.001005346
        4000000         2               4               95              3.140772        0.0008206536
        4000000         4               4               61              3.140973        0.0006196536
        4000000         8               4               51              3.141036        0.0005566536
```
We got results under environment:

| Name              | Value                                                                                 |
|-------------------|---------------------------------------------------------------------------------------|
|**Processor**      |2.8 GHz Intel Core i7                                                                  |
|**System Type**    |x64-based PC                                                                           |
|**Physical Memory**|16 GB 2133 MHz LPDDR3                                                                  |
|**OS version**     |macOS High Sierra                                                                      |