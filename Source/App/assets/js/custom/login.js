function AlertType(){this.AlertType=0,this.Message=""}function DisplayPicture(){$("#modalImagecrop").modal("show"),encodeImageFileAsURL("regFile","regAvatar")}function encodeImageFileAsURL(e,t){var r=document.getElementById(e).files;if(_isiDevice){var a=r[0],i=new FileReader;try{var o=new Image;o.src=webkitURL.createObjectURL(a),i.onload=function(){var e=EXIF.readFromBinaryFile(new BinaryFile(this.result)),r=document.getElementById("photo"),a=(r.getContext("2d"),new MegaPixImage(o));a.render(r,{orientation:e.Orientation,maxWidth:500}),profilePictureData=r.toDataURL("image/png","");var i=profilePictureData;"regAvatar"==t||"profileAvatar"==t?(document.getElementById("cropimage").src=i,$("#cropimage").cropbox({width:200,height:200,showControls:"never"}).on("cropbox",function(e,r,a){document.getElementById(t).src=a.getDataURL()})):document.getElementById(t).src=profilePictureData},i.readAsBinaryString(a)}catch(n){}return!0}if(r.length>0){var l=r[0],d=new FileReader;return d.onload=function(r){var a=r.target.result;document.getElementById(e).value=null,document.getElementById(t).src=a,("regAvatar"==t||"profileAvatar"==t)&&(document.getElementById("cropimage").src=a,$("#cropimage").cropbox({width:200,height:200,showControls:"never"}).on("cropbox",function(e,r,a){document.getElementById(t).src=a.getDataURL()}))},d.readAsDataURL(l),!0}}function onclockcropimg(){$("#modalImagecrop").modal("hide")}function onClickContSignUp(e){$("#SignUpAlert").html(""),e.removeAttribute("data-id");new AlertType;if(""==$("#txtEmail").val()&&""==$("#txtInvCode").val())return void toastr.error("Please enter email address or invitation code to proceed.");if(""!=$("#txtEmail").val()){if(!validateEmail($("#txtEmail").val()))return void toastr.error("Invalid email address.");var t=new CallBack;t.func="onVerifiedEmail",t.data=e.id;var r={email:$("#txtEmail").val()};_gUserService.IsEmailExists(r,t,!0),$(".load-bar").show()}else if(""!=$("#txtInvCode").val()){var a=_gUserService.GetInviteCodeDetails($("#txtInvCode").val(),null,!1);if(null==a||0==a.orgid)return void toastr.error("Invalid invitationcode.");_inviteCode=$("#txtInvCode").val(),$("#orgHead").hide(),$("#hdnEmail").val(a.email),e.setAttribute("data-id","#AccDetails")}}function onVerifiedEmail(e,t){return $(".load-bar").hide(),e?void toastr.error("Email address already registered."):(GetIndustryList(),$("#orgHead").show(),document.getElementById(t).setAttribute("data-id","#AccDetails"),$("#hdnEmail").val($("#txtEmail").val()),_isEmail=!0,void(void 0!=PageTransitions&&PageTransitions.Transcall(document.getElementById(t))))}function onClickSignIn(e){if(""==$("#txtmail").val())return void toastr.error("Email should not be empty.");if(""==$("#txtPassword").val())return void toastr.error("Password should not be empty.");if(!validateEmail($("#txtmail").val()))return void toastr.error("Invalid email address.");var t={email:$("#txtmail").val(),password:$("#txtPassword").val()},r=new CallBack;r.func="onAuthenticated",r.data=e.id,_gUserService.AuthenticateUser(t,r,!0),$(".load-bar").show()}function ValidatePhone(e){var t=new RegExp("[0-9-+]"),r=String.fromCharCode(e.charCode?e.which:e.charCode);return t.test(r)?void 0:(e.preventDefault(),!1)}function onAuthenticated(e,t){$(".load-bar").hide(),null!=e?(_glocalStorage.saveData("login",e),window.location.href="index.html"):toastr.error("Invalid credentials.")}function onClickSignUp(e){if(""==$("#fName").val())return void toastr.error("Firstname should not be empty.");if(""==$("#lName").val())return void toastr.error("Lastname should not be empty.");if(null==_inviteCode){if(""==$("#oName").val())return void toastr.error("Organization should not be empty.");if(0==$("#industryList").val())return void toastr.error("Please choose your Industry type")}if(""==$("#title").val())return void toastr.error("Title should not be empty.");if(""==$("#pass").val())return void toastr.error("Password should not be empty.");if(""==$("#cNo").val())return void toastr.error("Contact number should not be empty.");var t=new User;t.email=$("#hdnEmail").val(),t.password=$("#pass").val(),t.firstname=$("#fName").val(),t.lastname=$("#lName").val(),t.phone=$("#cNo").val(),t.title=$("#title").val(),t.image=$("#regAvatar").attr("src"),null!=_inviteCode?t.invitecode=_inviteCode:(t.industryid=parseInt($("#industryList").children("option").filter(":selected").val()),t.organization=$("#oName").val());var r=new CallBack;r.func="onCreatedProfile",$(".load-bar").show(),window.setTimeout(function(){var e=_gUserService.CreateProfile(t,null,!1);onCreatedProfile(e,r)},300)}function onCreatedProfile(e,t){$(".load-bar").hide(),null!=e?(_glocalStorage.saveData("login",e),window.location.href="index.html"):toastr.error("Unable to create profile.")}function GetIndustryList(){var e=_gUserService.GetIndustryList(null,null,!1);if(null!=e&&e.length>0){var t=$("#industryList");t.html(""),t.append('<option value="0" selected disabled>Choose Industry</option>');for(var r=0;r<e.length;r++)t.append('<option value="'+e[r].industryid+'">'+e[r].industryname+"</option>")}}var _isEmail=!1,_isiDevice=/ipad|iphone|ipod/i.test(navigator.userAgent.toLowerCase()),_inviteCode=null;AlertTypeE={Error:0,Success:1};