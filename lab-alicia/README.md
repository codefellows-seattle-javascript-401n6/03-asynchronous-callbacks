# 03 Asynchronous Callbacks

# Question: Describe the exported values of each module you have defined

# Answers:
Reader: The expected parameters are paths and a callback. The exported values are either an error object (error-first callback) expected to hold the value of null or a callback  expected to hold the value of results.

Viewer: The expected parameters are error, result, and i. The exported values are an error first error response, or the result which gets pushed to the txtFiles array where it is stored at an index.

Every function description should include it's arity (expected number of parameters), the expected data for each parameter (data-type and limitations), and it's behavior (for both valid and invalid use).

# Additional Information
I used these resources for my txt files:
https://www.gutenberg.org/ebooks/1184
http://montypython.50webs.com/scripts/Meaning_of_Life/11.htm

// are all paths finished reading and make sure the results are in the right order
// once finished and no errors return all results to the cb
// how do i track when whole thing is done