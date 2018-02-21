<template>
    <aside class="sm-side">
        <div class="user-head">
            <img src="src/assets/logo.png">

            <div class="user-name">
                <h5>Arif Sucipto</h5>
                <span class="email-address">info@codingexplained.com</span>
            </div>
        </div>

        <div class="compose-wrapper">
            <app-compose></app-compose>
        </div>

        <ul class="inbox-nav">
            <li>
                <a href="#">
                    <i class="fa fa-inbox"></i>Inbox <span class="label label-danger pull-right">?</span>
                </a>
            </li>

            <li>
                <a href="#">
                    <i class="fa fa-envelope-o"></i>Sent <span class="label label-default pull-right">?</span>
                </a>
            </li>

            <li>
                <a href="#">
                    <i class="fa fa-bookmark-o"></i>Important <span class="label label-warning pull-right">?</span>
                </a>
            </li>

            <li>
                <a href="#">
                    <i class=" fa fa-trash-o"></i>Trash <span class="label label-default pull-right">?</span>
                </a>
            </li>
        </ul>
    </aside>
</template>

<script>
export default {
  
}
</script>


