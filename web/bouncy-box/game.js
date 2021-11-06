let playing = false;
let x = 50;
let y = 50;
let xv = 2;
let yv = 0;
let ya = -0.2;
let rotation = 0;
let rv = 0;
var scale = 1;
var scaleup = true;
var currentColor = 0;
var score = 0;
var updateLooper;

const MINSPEED = 2;
const MAXSPEED = 5;
const MAXROTSPEED = 3;
const SCALEBOUNCESPEED = 0.06;
const BOUNCE_HEIGHT = 7;

const COLORS = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

box = document.getElementById("box");

function updateWalls() {
    let newLoc = Math.random() * 80;
    document.getElementById("wall1").style.top = "-" + (20 + newLoc) + "vh"; 
    document.getElementById("wall2").style.bottom = "-" + (100 - newLoc) + "vh"; 
    score += 1;
    xv += 0.2;
    let scoreLabel = document.getElementById("score");
    scoreLabel.textContent = "Score: " + score;
    scoreLabel.style.transform = "scale(1.5)";
    setTimeout(() => {scoreLabel.style.transform = "scale(1)";}, 100);
    rv = Math.random();
}

function update() { 
    bounds = box.getBoundingClientRect();
    w = window.innerWidth;
    h = window.innerHeight;

    // check for collisions
    if (bounds.left < 0) {
        x = x - bounds.left + 10;
        xv = -xv;
        updateWalls();
    }
    if (bounds.right > w) {
        x = x - bounds.left + bounds.right - bounds.width - 10;
        xv = -xv;
        updateWalls();
    }
    if (bounds.top < 0) {
        // die
        die();
    }
    if (bounds.bottom > h) {
        // die
        die();
    }
    // also check walls
    rect = box.getBoundingClientRect();
    topElt=document.elementFromPoint(rect.left, rect.top);
    if (topElt && (topElt.id == "wall1" || topElt.id == "wall2")) {
        // die
        die();
    }

    // update scale
    if (scaleup) {
        scale += SCALEBOUNCESPEED;
        if (scale >= 2) {
            scaleup = false;
        }
    }
    else {
        scale -= SCALEBOUNCESPEED;
        if (scale <= 1) {
            scaleup = true;
        }
    }

    // update position and rotation
    yv += ya;
    x += xv;
    y -= yv;
    box.style.left = x + 'px';
    box.style.top = y + 'px';
    rotation += MAXROTSPEED * (2 * rv - 1);
    box.style.transform = 'rotate(' + rotation + 'deg) ' + 'scale(' + scale + ')';
}

function die() {
    document.getElementById("modal-backdrop").style.display = "flex";
    document.getElementById("mscorelabel").textContent = "Score: " + score;
    clearInterval(updateLooper);
    document.getElementById("login-button").addEventListener("click", login_pressed);
    document.getElementById("cancel-button").addEventListener("click", cancel_pressed);
}

function cancel_pressed() {
    location.reload();
}

function login_pressed() {
    createPostRequest(
        {
            username: document.getElementById("username_input").value,
            password: document.getElementById("password_input").value,
            score: score
        },
        "/login",
        () => {
            let f = document.getElementById("login");
            f.action = "/login";
            f.submit();
        }
    );
}

function createPostRequest(jsonObj, route, callback, reqType='POST')
{
    let request = new XMLHttpRequest()
    request.open(reqType, route)
    request.setRequestHeader('Content-Type','application/json')

    requestBody = JSON.stringify(jsonObj)

    request.addEventListener('load', function(event) {
        let msg = event.target.response;
        let label = document.getElementById("info_label");
        if (event.target.status === 403) {
            label.style.color = "red";
            label.textContent = msg;
        }
        else if(event.target.status !== 200)
        {
            label.style.color = "red";
            label.textContent = msg;
        }
        else
        {
            label.style.color = "white";
            label.textContent = msg;
            callback();
        }
        label.style.display = "flex";
    })
    request.send(requestBody)
}

function colorfade() {
    box.style.backgroundColor = COLORS[currentColor];
    currentColor++;
    if (currentColor === COLORS.length) {
        currentColor = 0;
    }
}

document.onkeypress = function (e) {
    e = e || window.event;
    if (!playing) {
        document.getElementById("play-backdrop").style.display = "none";
        updateLooper = setInterval(update, 10);
        setInterval(colorfade, 1000);
        playing = true;
    }
    else {
        yv = BOUNCE_HEIGHT;
        rv = Math.random();
    }
};

