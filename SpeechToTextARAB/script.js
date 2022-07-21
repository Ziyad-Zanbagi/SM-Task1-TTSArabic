var speechRecognition = window.webkitSpeechRecognition

var recognition = new speechRecognition()
recognition.lang = "ar-AE"

var text = $("#text")

var instructions = $("#instructions")

var content = ''

recognition.continuous = true

//once recognition starts
recognition.onstart = function() {
    instructions.text("التعرف على الصوت فعال, ابدأ بالكلام")
}
recognition.onspeechend = function () {
    instructions.text("لا يوجد كلام")
}
recognition.onerror = function() {
    instructions.text("يوجد خطأ, حاول مرة اخرى")
}
recognition.onresult = function(event) {
    var current = event.resultIndex;

    var transcript = event.results[current][0].transcript

    content += transcript

    text.val(content)
}

$("#start-btn").click(function(event) {
    if(content.length) {
        content += ''
    }
    recognition.start()

})
$("#stop-btn").click(function(event) {
    recognition.stop()
    content = ''
})