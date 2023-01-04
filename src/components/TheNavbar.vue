<template >
    <div class="container-fluid">
        <div class="row align-items-center ">

            <div class="col-2">
                <div class="title">
                    Margarita
                </div>
            </div>
            <div class="col flex-grow-1 ">
                <div class="bar">
                    <ul>
                        <li class="active">Home</li>
                        <li>Cocktail</li>
                        <li>Favorite</li>
                    </ul>
                </div>
            </div>
            <div class="col-1 ">
                <form  action="" class="search-bar d-flex justify-content-end  " >
                    <input type="search" name="search" pattern=".*\S.*" required 
                        placeholder="">
                    <button class="search-btn" type="submit">
                        <span>Search</span>
                    </button>
                </form>

            </div>
            <div class="col-1">
                <div class="login">
                    <button class="btn ElzaOblique">Login</button>
                </div>

            </div>


        </div>

    </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
.container-fluid{
    color: var(--color-white);
}
.title {
    font-family: gardez, sans-serif;
    font-weight: 800;
    font-style: italic;
    font-size: 40px;
    padding: .5rem 1rem;
    text-align: center;
}

.bar {



    ul {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: unset;
        gap: 3rem;

        li {
            display: block;
            padding: .5rem;
            display: flex;
            flex-direction: column;
            
            
            text-align: center;
            font-family: elza, sans-serif;
            font-weight: 500;
            font-style: normal;
            font-size: 20px;
        }
        .active::after{
            content: "";
            height: 3px;
            background-color: var(--btn-color-1);
            border-radius: 20px;
        }
        

    }

}

.login {
    .btn {
        background-color: var(--btn-color-1);
        
    }
}


.search-bar input,
.search-btn,
.search-btn:before,
.search-btn:after {
    transition: all 0.25s ease-out;
}

.search-bar input,
.search-btn {
    width: 3em;
    height: 3em;
}

.search-bar input:invalid:not(:focus),
.search-btn {
    cursor: pointer;
}

.search-bar,
.search-bar input:focus,
.search-bar input:valid {
    width: 100%;
}

.search-bar input:focus,
.search-bar input:not(:focus)+.search-btn:focus {
    outline: transparent;
}

.search-bar {
    margin-left: auto;


    max-width: 15em;
}

.search-bar input {
    background: transparent;
    border-radius: 1.5em;
    box-shadow: 0 0 0 0.4em #171717 inset;
    padding: 0.75em;
    transform: translate(0.5em, 0.5em) scale(0.5);
    transform-origin: 100% 0;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
}

.search-bar input::-webkit-search-decoration {
    -webkit-appearance: none;
}

.search-bar input:focus,
.search-bar input:valid {
    background: #fff;
    border-radius: 0.375em 0 0 0.375em;
    box-shadow: 0 0 0 0.1em #d9d9d9 inset;
    transform: scale(1);
}

.search-btn {
    background: #171717;
    border-radius: 0 0.75em 0.75em 0 / 0 1.5em 1.5em 0;
    padding: 0.75em;
    position: relative;
    transform: translate(0.25em, 0.25em) rotate(45deg) scale(0.25, 0.125);
    transform-origin: 0 50%;
}

.search-btn:before,
.search-btn:after {
    content: "";
    display: block;
    opacity: 0;
    position: absolute;
}

.search-btn:before {
    border-radius: 50%;
    box-shadow: 0 0 0 0.2em var(--color-txt-btn) inset;
    top: 0.75em;
    left: 0.75em;
    width: 1.2em;
    height: 1.2em;
}

.search-btn:after {
    background: var(--color-txt-btn);
    border-radius: 0 0.25em 0.25em 0;
    top: 51%;
    left: 51%;
    width: 0.75em;
    height: 0.25em;
    transform: translate(0.2em, 0) rotate(45deg);
    transform-origin: 0 50%;
}

.search-btn span {
    display: inline-block;
    overflow: hidden;
    width: 1px;
    height: 1px;
}

/* Active state */
.search-bar input:focus+.search-btn,
.search-bar input:valid+.search-btn {
    background: var(--btn-color-1);
    border-radius: 0 0.375em 0.375em 0;
    transform: scale(1);
}

.search-bar input:focus+.search-btn:before,
.search-bar input:focus+.search-btn:after,
.search-bar input:valid+.search-btn:before,
.search-bar input:valid+.search-btn:after {
    opacity: 1;
}

.search-bar input:focus+.search-btn:hover,
.search-bar input:valid+.search-btn:hover,
.search-bar input:valid:not(:focus)+.search-btn:focus {
    background: var(--btn-color-1-dark);
}

.search-bar input:focus+.search-btn:active,
.search-bar input:valid+.search-btn:active {
    transform: translateY(1px);
}

@media screen and (prefers-color-scheme: dark) {

    .body,
    input {
        color: #f1f1f1;
    }

    .body {
        background: #171717;
    }

    .search-bar input {
        box-shadow: 0 0 0 0.4em #f1f1f1 inset;
    }

    .search-bar input:focus,
    .search-bar input:valid {
        background: #3d3d3d;
        box-shadow: 0 0 0 0.1em #3d3d3d inset;
    }

    .search-btn {
        background: #f1f1f1;
    }
}

</style>