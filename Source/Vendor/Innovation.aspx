<%@ page language="C#" autoeventwireup="true" inherits="Innovation, App_Web_pcxkjqhy" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <meta content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' name='viewport'>

    <link href="css/common.css" rel="stylesheet" />
    <link href="css/bootstrap/bootstrap.css" rel="stylesheet" />
    <link href="css/fonts.css" rel="stylesheet" />
    <link href="css/toastr/toastr.css" rel="stylesheet" />

    <script type="text/javascript" src="js/jQuery-2.1.4.min.js"></script>
    <script type="text/javascript" src="js/jquery-migrate-1.2.1.min.js"></script>
    <script type="text/javascript" src="js/bootstrap/bootstrap.min.js"></script>
    <script type="text/javascript" src="js/init.js"></script>
</head>
<body>
    <form id="form1" runat="server" style="height: 100%;">
        <input type="hidden" id="hdnVendorId" runat="server" />
        <input type="hidden" id="hdnKpiId" />
        <input type="hidden" id="hdnCmp" />
        <input type="hidden" id="hdnOrg" />
        <input type="hidden" id="hdnInvId" />

        <asp:ScriptManager EnablePartialRendering="true"
            ID="ScriptManager1" runat="server">
        </asp:ScriptManager>
        <asp:UpdatePanel ID="UpdatePanel1" runat="server" UpdateMode="Conditional">
            <ContentTemplate>
                <div id="serverData" runat="server">
                </div>
            </ContentTemplate>
            <Triggers>
                <asp:AsyncPostBackTrigger ControlID="btnUpdatePanel" EventName="Click" />
            </Triggers>
        </asp:UpdatePanel>

        <asp:Button Style="display: none" ID="btnUpdatePanel" runat="server" Text="Button" />

        <div class="container" style="padding: 0px; min-height: 100%; background: white;">
            <div class="col-md-12" style="padding: 10px; background: white;">
                <div class="col-md-4">
                    <img src="images/strategy_sketchpad_logo.png" style="width: 150px; height: 45px;" />
                </div>
                <div class="col-md-4">
                    <h4 class="" style="color: #5ABBBA;">Vendor Module</h4>
                </div>
                <div class="col-md-4">
                    <%--<button class="lout-btn" href="Default.aspx?type=logout">Logout</button>--%>
                    <div class="col-md-4">
                    </div>
                    <div class="col-md-4">
                    </div>
                    <div class="col-md-4">
                        <a class="lg-out" href="Default.aspx?type=logout">Logout
                        </a>
                    </div>
                </div>
            </div>

            <div class="col-md-12 top-menu" style="padding: 10px">
                <div class="col-md-3">
                    <span style="position: relative;">
                        <img src="images/profile_img.png" style="width: 25px" /></span>
                    <span class="top-all-align" id="vName">test@gmail.com</span>
                </div>
                <div class="col-md-3">
                    <span style="position: relative;">
                        <img src="images/global_company.png" style="width: 25px" /></span>
                    <span class="top-all-align" id="cName">Company Name</span>
                </div>
                <div class="col-md-3">
                    <span style="position: relative;">
                        <img src="images/mail.png" style="width: 25px" /></span>
                    <span class="top-all-align" id="vEmail">email@companyemail.in</span>
                </div>
                <div class="col-md-3">
                    <div class="col-md-9">
                        <span style="position: relative;">
                            <img src="images/phone.png" style="width: 25px" /></span>
                        <span class="top-all-align" id="vCNO">+912586457256</span>
                    </div>
                    <div class="col-md-3" style="border-left: 2px solid gray">
                        <span style="position: relative;">
                            <img onclick="onClickEditVendor()" src="images/edit.png" style="width: 25px; cursor: pointer;" /></span>
                    </div>
                </div>
            </div>

            <div class="row" style="height: calc(100% - 110px);">
                <div class="col-xs-12" style="height: 100%;">
                    <div class="col-xs-3" style="height: 100%; padding: 0; background: #ececec; border-right: 2px solid #C1C0C0;">
                        <!-- required for floating -->
                        <!-- Nav tabs -->
                        <ul class="nav nav-tabs tabs-left" id="invTab" style="background: white;">
                        </ul>
                    </div>
                    <div class="col-xs-9" style="height: 100%; height: 100%; padding: 30px; padding-top: 10px; overflow: auto;">
                        <!-- Tab panes -->
                        <div class="tab-content" id="invCont">
                            <div class="tab-pane active" id="home">
                                <div class="kpisDiv">
                                    <div class="row">
                                        <div class="col-md-12" style="background: white;">
                                            <span class="col-blue" style="position: relative; top: 10px;">List of Innovation Request</span>

                                            <span class="t-requests" id="totalrequests" style="position: relative; top: 10px;">(0 Request in Total) </span>
                                            <hr />
                                        </div>
                                    </div>
                                    <div class="row scrolltab">
                                      <%--  <div class="col-md-6" style="padding-top: 10px; padding-bottom: 10px; cursor: pointer" onclick="onclickKpi(20016,this)">
                                            <div class="content-box row">
                                                <div class="col-md-12"><span class="col-blue">Test Func</span></div>
                                                <div class="col-md-12">
                                                    <span class="con-title">Legislative Compliance</span><hr />
                                                </div>
                                                <div class="col-md-12"><span class="con-description">adasd</span></div>
                                            </div>
                                        </div>--%>
                                    </div>
                                </div>
                                <div class="invDiv" style="display: none;">
                                </div>
                            </div>
                        </div>
                        <div class="clearfix"></div>
                    </div>
                </div>
            </div>
        </div>
    </form>

    <div id="publish-post-modal" class="modal fade" role="dialog">
        <div class="modal-dialog">
            <!-- Modal content-->
            <div class="modal-content" style="top: 150px;">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <span class="modal-title">Innovation Submission</span>
                </div>
                <div id="newmod" class="modal-body" style="">
                    <table style="width: 100%;">
                        <tr>
                            <td><span class="col-blue" id="invTit"></span>
                                <br />
                                <span id="invDes"></span></td>
                        </tr>
                        <tr>
                            <td style="padding-top: 10px;">
                                <span class="t-requests">
                                    <img src="images/attach.png" style="width: 15px;" />
                                    <a id="invLin"></a>
                                </span>
                            </td>
                        </tr>
                    </table>
                </div>
                <div class="modal-footer" style="text-align: left">
                    <div id="pub" style="display: none;">
                        <span class="t-requests" style="position: relative; top: 5px;">Once published, Innovation cannot be edited or deleted</span>
                        <input type="button" class="white-sm-btn pull-right" value="Publish" onclick="onClickPub()" />
                    </div>
                    <div id="del" style="display: none;">
                        <span class="t-requests" style="position: relative; top: 5px;">Once deleted, Innovation cannot be recycled</span>
                        <input type="button" class="white-sm-btn pull-right" value="Delete" onclick="onClickDel()" />
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div id="publish-all-post-modal" class="modal fade" role="dialog">
        <div class="modal-dialog">
            <!-- Modal content-->
            <div class="modal-content" style="top: 150px;">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <span class="modal-title">Innovation Submission</span>
                </div>
                <div class="modal-body" style="">
                    Are you sure you want to publish all innovations. Once published, Innovation cannot be edited or deleted.
                </div>
                <div class="modal-footer" style="text-align: left">
                    <input type="button" class="white-sm-btn pull-right" style="margin: 2px;" value="No" data-dismiss="modal" />
                    <input type="button" class="blue-sm-btn pull-right" style="margin: 2px;" value="Yes" onclick="onClickPublishAllConfirmation()" />
                </div>
            </div>
        </div>
    </div>

    <div id="no-publish" class="modal fade" role="dialog">
        <div class="modal-dialog">
            <!-- Modal content-->
            <div class="modal-content" style="top: 150px;">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <span class="modal-title">Innovation Submission</span>
                </div>
                <div class="modal-body" style="">
                   All Innovations are marked as published. Currently no Innovations are available to Publish.
                </div>
                <div class="modal-footer" style="text-align: left">
                    <input type="button" class="white-sm-btn pull-right" style="margin: 2px;" value="Close" data-dismiss="modal" />
                </div>
            </div>
        </div>
    </div>

    <div id="redirect-modal" class="modal fade" role="dialog">
        <div class="modal-dialog">
            <!-- Modal content-->
            <div class="modal-content" style="top: 150px;">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <span class="modal-title">Confirm your action</span>
                </div>
                <div class="modal-body" style="">
                    Attention! Right now you are leaving Strategy Sketchpad and we are not responsible for anything that might happen on this page
                </div>
                <div class="modal-footer" style="text-align: left">
                    <input type="button" class="white-sm-btn pull-right" style="margin: 2px;" value="No" data-dismiss="modal" />
                    <input type="button" class="blue-sm-btn pull-right" style="margin: 2px;" value="Yes" onclick="redirectToLink();" />
                </div>
            </div>
        </div>
    </div>

    <div id="editInv" class="modal fade" role="dialog">
        <div class="modal-dialog">
            <!-- Modal content-->
            <div class="modal-content" style="top: 150px;">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <span class="modal-title">Innovation Submission</span>
                </div>
                <div id="edmod" class="modal-body" style="">
                    <table style="width: 100%;">
                        <tr>
                            <td>
                                <input style="width: 100%; padding: 4px; margin-bottom: 15px;"
                                    type="text" id="invTitle" placeholder="Innovation Title" /></td>
                        </tr>
                        <tr>
                            <td>
                                <textarea id="invDesc" style="resize: none; width: 100%; padding: 4px; margin-bottom: 15px;"
                                    rows="4" placeholder="Enter Description"></textarea></td>
                        </tr>
                        <tr>
                            <td><span>
                                <img src="images/attach.png" style="width: 15px" />
                            </span>
                                <span class="t-requests">http://
                                </span>
                                <input style="width: calc(100% - 58px); padding: 4px; margin-bottom: 15px;"
                                    type="text" id="invLink" placeholder="Innovation Title" /></td>
                        </tr>
                    </table>
                </div>
                <div class="modal-footer" style="text-align: left">
                    <input type="button" class="white-sm-btn pull-right" value="Save" onclick="onClickAddInnov()" />
                </div>
            </div>
        </div>
    </div>


    <div id="editven" class="modal fade" role="dialog">
        <div class="modal-dialog">
            <!-- Modal content-->
            <div class="modal-content" style="top: 150px;">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <span class="modal-title">Innovation Submission</span>
                </div>
                <div class="modal-body" style="">
                    <table style="width: 100%;">
                        <tr>
                            <td>
                                <input style="width: 100%; padding: 4px; margin-bottom: 15px;"
                                    type="text" id="venName" placeholder="Name" /></td>
                        </tr>
                        <tr>
                            <td>
                                <input style="width: 100%; padding: 4px; margin-bottom: 15px;"
                                    type="text" id="venPhone" placeholder="Contact Number" /></td>
                        </tr>
                    </table>
                </div>
                <div class="modal-footer" style="text-align: left">
                    <input type="button" class="white-sm-btn pull-right" value="Save" onclick="onClickSaveVendor()" />
                </div>
            </div>
        </div>
    </div>


    <script type="text/javascript" src="js/toastr/toastr.js"></script>
    <script type="text/javascript" src="js/webService/webservice.js"></script>
    <script type="text/javascript" src="js/webService/webobjects.js"></script>
    <script type="text/javascript" src="js/webService/userservice.js"></script>
    <script type="text/javascript" src="js/common.js"></script>
    <script>
        $(document).ready(function () {
            pageLoad();
        });

        function pageLoad() {
            blockUI('body');
            if ($("#hdnOrg").val() != "" && $("#hdnKpiId").val() != "") {
                onLoadInnerInnovation();
            }
            else {
                onLoadInnovation();
            }
            unblockUI("body");
        }
    </script>
</body>
</html>
