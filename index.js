// all information about community comes from this function
    function showCommunity(){
    const community =["activities","artist","childcare","classes","events","general","groups","local news","lost and found","missed connections","musicians","pets","politics","rants & raves","rideshare","volunteers"];
    const categorial="<a href=https://dallas.craigslist.org/search/ccc#search=1~list~0~0 class=\"ccc\" data-alltitle=\"all community\" data-cat=\"ccc\"><span class=\"txt\">community<sup class=\"c\"></sup></span></a>";

        let counter = 0;
        let text ="<div class='row'>";
        text +="<div class='col'>";

    for (let i = 0; i < community.length; i++) {
    text +="<li>"+"<a href='underConstruction.html' class='act' data-cat='act'>"+ community[i] +"</a> ";
        // every time its loop it adds counter++, when 10 counter it make a new list.
        counter++;
        if (counter ===10){
            text +="</div>";
            text += "<div class='col'>";
            counter=0;
        }

    }
        text += "</div>";

    $("#demo").html(text);
    $("#titel").html(categorial);


}
    // all information about services comes from this function
    function services(){
    const services =["automotive","beauty","cell/mobile","computer","creative","cycle","event","farm and garden",
    "financial","health/well","household","labor/move","legal","lessons","marine","pet","real estate","skilled trade", "small business ads", "travel/vacation",
    "write/editing/translation"];

    const categorial="<a href=https://newyork.craigslist.org/search/ccc#search=1~list~0~0 class=\"ccc\" data-alltitle=\"all community\" data-cat=\"ccc\"><span class=\"txt\">services<sup class=\"c\"></sup></span></a>";

        let counter = 0;
        let text ="<div class='row'>";
        text +="<div class='col'>";

    for (let i = 0; i < services.length; i++) {
    text +="<li>"+"<a href='underConstruction.html' class='act' data-cat='act'>"+ services[i] +"</a> ";
        // every time its loop it adds counter++, when 10 counter it make a new list.
        counter++;
        if (counter ===10){
            text +="</div>";
            text += "<div class='col'>";
            counter=0;
        }

    }

        text += "</div>";

    $("#demo").html(text);
        $("#titel").html(categorial);

}
    // all information about forums comes from this function
    function forums(){
    const forums = ["apple","art","atheist","automotive","beauty","bikes","celebs","computer",
    "cosmos","diet","divorce","dying","eco","feedback","film","fixit","food","frugal",
    "gaming","garden","haiku","help","history","housing","jobs","jokes","legal","manners"
    ,"marriage","money","music","open","parent","pets","philos","photo","politics"
    ,"psych","recover","religion","romantic","science","spirit","sports","super","tax"
    ,"travel","tv","vegan","words","writing"];

    const categorial="<a href=https://dallas.craigslist.org/search/ccc#search=1~list~0~0 class=\"ccc\" data-alltitle=\"all community\" data-cat=\"ccc\"><span class=\"txt\">discussion forums<sup class=\"c\"></sup></span></a>";

        let counter = 0;
        let text ="<div class='row'>";
        text +="<div class='col'>";
    for (let i = 0; i < forums.length; i++) {
    text +="<li>"+"<a href='underConstruction.html' class='act' data-cat='act'>"+ forums[i] +"</a> ";
        // every time its loop it adds counter++, when 10 counter it make a new list.
        counter++;
        if (counter ===10){
            text +="</div>";
            text += "<div class='col'>";
            counter=0;
        }

    }

        text += "</div>";

    $("#demo").html(text);
        $("#titel").html(categorial)
}
// all information about housing comes from this function
    function housing(){
    const housing = ["apartments / housing","housing swap","housing wanted","office/commercial"
    ,"parking/storage","real estate for sale","rooms/shared","rooms wanted","sublets/temporary","vacation rentals"];

    const categorial="<a href=https://dallas.craigslist.org/search/ccc#search=1~list~0~0 class=\"ccc\" data-alltitle=\"all community\" data-cat=\"ccc\"><span class=\"txt\">housing<sup class=\"c\"></sup></span></a>";

        let counter = 0;
        let text ="<div class='row'>";
        text +="<div class='col'>";
    for (let i = 0; i < housing.length; i++) {
    text +="<li>"+"<a href='underConstruction.html' class='act' data-cat='act'>"+ housing[i] +"</a> ";
        // every time its loop it add counter++, when 10 counter it make a new list.
        counter++;
        if (counter ===10){
            text +="</div>";
            text += "<div class='col'>";
            counter=0;
        }

    }
        text += "</div>";

    $("#demo").html(text);
        $("#titel").html(categorial)
}
// all information about sale comes from this function
    function sale(){
    const sale = ["antiques","appliances","arts and crafts","atvs/utvs/snow","auto parts","aviation"
    ,"baby and kid","barter","beauty & health","bike parts","boat parts","boats","books","busisness","cars and trusk"
    ,"cds/dvd/vhs","cell phones","clothes & acc","collectibles","computer parts","computers","electronics"
    ,"farm and garden","free","furniture","garage sale","general","heavy equipment","household","jewelry"
    ,"materials","motorcycle parts","motorcycles","music instrument","photo and video","rvs & camp"
    ,"sportig","tickets","tools","toys and games","trailers","video gaming","wanted","wheels and tires"];

    const categorial="<a href=https://dallas.craigslist.org/search/ccc#search=1~list~0~0 class=\"ccc\" data-alltitle=\"all community\" data-cat=\"ccc\"><span class=\"txt\">sale<sup class=\"c\"></sup></span></a>";


        let counter = 0;
        let text ="<div class='row'>";
        text +="<div class='col'>";
    for (let i = 0; i < sale.length; i++) {
    text +="<li>"+"<a href='underConstruction.html' class='act' data-cat='act'>"+ sale[i] +"</a> ";
        // every time its loop it add counter++, when 10 counter it make a new list.
        counter++;
        if (counter ===10){
            text +="</div>";
            text += "<div class='col'>";
            counter=0;
        }

    }
        text += "</div>";

    $("#demo").html(text);
        $("#titel").html(categorial)
}
// all information about jobs comes from this function
    function jobs(){
    const jobs = ["accounting and finance","admin/office","architect/engineer/cad","art/media/design"
    ,"biotech/science","business/mgmt","customer service","education","etc/misc","food/bev/hosp"
    ,"general labor","human resources","legal/paralegal","manufacturing","marketing/pr/adv"
    ,"medical/health","nonprofit sector","real estate","retail/wholesale","sales/biz dev","salon/spa/fitness"
    ,"security","skilled trade/craft","software/qa/dba","system/network","technical support","transport","tv/film/vide/radio"
    ,"web/htm/info/design","writing/editing"]

        const categorial="<a href=https://newyork.craigslist.org/search/ccc#search=1~list~0~0 class=\"ccc\" data-alltitle=\"all community\" data-cat=\"ccc\"><span class=\"txt\">jobs<sup class=\"c\"></sup></span></a>";

        let counter = 0;
        let text ="<div class='row'>";
        text +="<div class='col'>";
    for (let i = 0; i < jobs.length; i++) {
    text +="<li>"+"<a href='underConstruction.html' class='act' data-cat='act'>"+ jobs[i] +"</a> ";
        // every time its loop it add counter++, when 10 counter it make a new list.
        counter++;
        if (counter ===10){
            text +="</div>";
            text += "<div class='col'>";
            counter=0;
        }

    }
        text += "</div>";

    $("#demo").html(text);
        $("#titel").html(categorial)
}
// all information about gigs comes from this function
    function gigs(){
    const gigs = ["computer","creative","crew","domestic","event","labor","talent","writing"];

    const categorial="<a href=https://newyork.craigslist.org/search/ccc#search=1~list~0~0 class=\"ccc\" data-alltitle=\"all community\" data-cat=\"ccc\"><span class=\"txt\">gigs<sup class=\"c\"></sup></span></a>";

        let counter = 0;
        let text ="<div class='row'>";
        text +="<div class='col'>";
    for (let i = 0; i < gigs.length; i++) {
    text +="<li>"+"<a href='underConstruction.html' class='act' data-cat='act'>"+ gigs[i] +"</a> ";
        // every time its loop it add counter++, when 10 counter it make a new list.
        counter++;
        if (counter ===10){
            text +="</div>";
            text += "<div class='col'>";
            counter=0;
        }

    }
        text += "</div>";

    $("#demo").html(text);
        $("#titel").html(categorial)
}
// all information about resumes comes from this function
    function resumes(){
    const resumes = [];

    const categorial="<a href=https://dallas.craigslist.org/search/ccc#search=1~list~0~0 class=\"ccc\" data-alltitle=\"all community\" data-cat=\"ccc\"><span class=\"txt\">resumes<sup class=\"c\"></sup></span></a>";


    let counter = 0;
    let text ="<div class='row'>";
        text +="<div class='col'>";
    for (let i = 0; i < resumes.length; i++) {

    text +="<a href='underConstruction.html' class='act' data-cat='act'>"+ resumes[i] +"</a>"+"<br>";

    // every time its loop it add counter++, when 10 counter it make a new list.
    counter++;
        if (counter ===10){
        text +="</div>";
        text += "<div class='col'>";
        counter=0;
        }

    }
    text += "</div>";

    $("#demo").html(text);
        $("#titel").html(categorial)
}