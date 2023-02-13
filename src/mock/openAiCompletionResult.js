
module.exports = {
    "id": "cmpl-COMPLETION_ID",
    "object": "text_completion",
    "created": 1589498378,
    "model": "YOUR_FINE_TUNED_MODEL_NAME",
    "choices": [
    {
        "logprobs": {
        "text_offset": [
            19
        ],
        "token_logprobs": [
            -0.03597255
        ],
        "tokens": [
            " positive"
        ],
        "top_logprobs": [
            {
            " negative": -4.9785037,
            " positive": -0.03597255
            }
        ]
        },

        "text": " positive",
        "index": 0,
        "finish_reason": "length"
    }
    ]
}