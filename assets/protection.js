var FormProtection = function () {
    this.elem = "div[data-fp]";
    this.elems = {};

    this.after = function (form) {
        form.submit();
    };

    this.init = function(after,elem) {
        if(typeof after === "function") {
            this.after = after;
        }

        if(typeof elem !== "undefined" && elem !== ".fp") {
            this.elem = elem;
        }

        this.elems = document.querySelectorAll(this.elem);
        //console.log(this.elems);
        for (var i=0; i<this.elems.length; i++) {
            //console.log(this.elems[i]);
            this.elems[i].style = "display:none;";
            //this.elems[i].querySelector(".src_wbp");
            this.elems[i].appendChild(this.createInput());

            this.addWatch(this.elems[i].querySelector(".fp"));
        }
    };
    this.createInput = function() {
        var inp = document.createElement("INPUT");
        inp.type = "text";
        inp.className = "fp";
        inp.value = "";
        inp.name = "fp-inp"
        return inp;
    };

    this.addWatch = function (elem) {
        var prot = this;
        elem.form.addEventListener("submit", function (e) {
            e.preventDefault();
            if(e.target.querySelector(".fp").value === "") {
                prot.beforeSend(e.target,prot.after);
            } else {
                console.log("Ungenerated");
            }
        });
    };

    this.beforeSend = function(form,onSuccess) {
        this.ajaxRequest("GET","/external/form_token",function(data,form) {
            if(typeof data == "string") {
                form.querySelector(".fp").value = JSON.parse(data);
            }
            //console.log(JSON.parse(data));
            onSuccess(form);
        },form);
        //console.log("activate protection: ",form);
        //onSuccess(form);
    };

    this.ajaxRequest = function(method,url,callback,form) {
        var xhr = new XMLHttpRequest();
        xhr.open(method, url,true);
        xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
        xhr.onload = function() {
            if (xhr.status === 200) {
                callback(xhr.response,form);
            }
            else {
                alert('Request failed.  Returned status of ' + xhr.status);
            }
        };
        xhr.send("");
    }
};
