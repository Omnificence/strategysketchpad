<%@ page language="C#" autoeventwireup="true" inherits="Default2, App_Web_pcxkjqhy" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <meta content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' name='viewport'>

    <link href="css/common.css" rel="stylesheet" />
    <link href="css/bootstrap/bootstrap.css" rel="stylesheet" />
    <link href="css/fonts.css" rel="stylesheet" />
    <link href="css/toastr/materialadmin.css" rel="stylesheet" />
    <link href="css/toastr/toastr.css" rel="stylesheet" />

    <script type="text/javascript" src="js/jQuery-2.1.4.min.js"></script>
    <script type="text/javascript" src="js/jquery-migrate-1.2.1.min.js"></script>
    <script type="text/javascript" src="js/bootstrap/bootstrap.min.js"></script>
    <script type="text/javascript" src="js/toastr/toastr.js"></script>
    <script type="text/javascript" src="js/init.js"></script>
    <script type="text/javascript" src="js/webService/webservice.js"></script>
    <script type="text/javascript" src="js/webService/webobjects.js"></script>
    <script type="text/javascript" src="js/webService/userservice.js"></script>
    <script type="text/javascript" src="js/common.js"></script>


</head>
<body>
    <div class="container">
        <input type="hidden" id="hdnInvitationCode" />
        <div>


            <div id="signincont" class="login-container">
                <img src="images/logo.png" style="width: 60%; margin-left: 20%; position: absolute; margin-top: -150px;" />
                <div class="login-header">
                    Enter Strategy SketchPad
                </div>
                <div class="login-body">

                    <table class="login-table" id="beforeLogin">
                        <tr>
                            <td style="padding: 10px 0px;">
                                <input id="txtEmail" runat="server" type="email" placeholder="Email" required />
                            </td>

                        </tr>
                        <tr>
                            <td>
                                <hr class="or">
                            </td>
                        </tr>
                        <tr>
                            <td style="padding: 10px 0px;">
                                <input id="txtInvCode" runat="server" type="text" placeholder="InviteCode" required />
                            </td>

                        </tr>
                        <tr>
                            <td style="padding-top: 10px; padding-bottom: 10px;">
                                <input class="submit" type="submit" style="display: none;" />
                                <input type="button" id="loginBtn" class="btn-login btn-primary-bright ink-reaction btn mt-10" onclick="onClickContinue()" value="Continue" />


                            </td>
                        </tr>
                        <tr>
                            <td style="padding-top: 10px; padding-bottom: 10px; padding-left: 15px; text-align: left;">
                                <asp:Label ID="Label1" Visible="false" Style="color: red;" runat="server" Text="Label">Invalid Credentials*</asp:Label>

                            </td>
                        </tr>
                    </table>
                    <table class="login-table" id="loginTable" style="display: none;">
                        <tr>
                            <td style="padding: 10px 0px;">
                                <img src="images/profile_img.png" style="width: 50px;" />
                            </td>

                        </tr>
                        <tr>
                            <td>
                                <label id="Email">donpp46@gmail.com</label>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding: 10px 0px;">
                                <input id="txtPass" runat="server" type="password" placeholder="Password" required />
                            </td>

                        </tr>
                        <tr>
                            <td>
                                <label style="color: #B7B6B6">Forgot Password? <a href="#">Click here</a></label>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding-top: 10px; padding-bottom: 10px;">
                                <input class="submit" type="submit" style="display: none;" />
                                <input type="button" id="Button1" onclick="onClickEnter()" class="btn-login btn-primary-bright ink-reaction btn" value="Enter" />


                            </td>
                        </tr>
                        <tr>
                            <td style="padding-top: 10px; padding-bottom: 10px; padding-left: 15px; text-align: left;">
                                <asp:Label ID="Label2" Visible="false" Style="color: red;" runat="server" Text="Label">Invalid Credentials*</asp:Label>

                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>

    </div>

    <script>
        function onCliCkSignin() {
            if (!document.getElementById("form1").checkValidity()) {
                $('#form1').find('.submit').click();
                return false;
            }

            return true;
        }
    </script>

</body>
</html>
