[01:19] Fredrik Johansson - Everyloop
    function addTechnology() {​​
    // Prompt the user for the technology name
    var newTech = prompt("Enter the name of the new technology:");
    if (newTech) {​​
        // Create a new list item
        var listItem = document.createElement("li");
        // Add the new technology to the list item
        listItem.innerHTML = "<b>" + newTech + ": </b>Some description.";
        // Append the new list item to the existing list
        document.getElementById("techList").appendChild(listItem);
    }​​
}​​
<https://teams.microsoft.com/l/message/19:587319b497ac432799ac4ebf0a8d480c@thread.tacv2/1699953570126?tenantId=5b679921-53f7-4642-a251-8a603608d21c&amp;groupId=a6556509-2b5c-4484-9047-4826bc9db18e&amp;parentMessageId=1699949303519&amp;teamName=AI 23&amp;channelName=Databehandling&amp;createdTime=1699953570126&amp;allowXTenantAccess=false>