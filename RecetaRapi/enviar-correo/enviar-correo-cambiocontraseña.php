<!DOCTYPE html>
<html>
<head>
    <title></title>
<meta charset="utf-8">
</head>
<body>
<?php
if (!$_POST) {
    die('No autorizado');
}
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';


// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->SMTPDebug = 0;                      // Enable verbose debug output
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'smtp.gmail.com';// para hotmail smtp.live.com // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'michel01ft@gmail.com';                     // SMTP username
    $mail->Password   = '';                               // SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    $mail->Port       = 587;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

    //Recipients
    $mail->setFrom('michel01ft@gmail.com', 'Michel');
    $mail->addAddress($correo);     // Add a recipient
    // $mail->addAddress('ellen@example.com');               // Name is optional
    // $mail->addReplyTo('info@example.com', 'Information');
    // $mail->addCC('cc@example.com');
    // $mail->addBCC('bcc@example.com');

    // Attachments
    // $mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
    // $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name

    // Content
    $mail->isHTML(true);   
    $mail->Subject = utf8_decode('Se ha Realizado el Cambio De Contraseña');
    $mail->Body    = utf8_decode(
'<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html charset="utf-8" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head charset="utf-8">

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="x-apple-disable-message-reformatting" />
    <meta name="apple-mobile-web-app-capable" content="yes" /><meta name="apple-mobile-web-app-status-bar-style" content="black" /><meta name="format-detection" content="telephone=no" /><title></title><style type="text/css">
    /* Resets */
    .ReadMsgBody { width: 100%; background-color: #ebebeb;}
    .ExternalClass {width: 100%; background-color: #ebebeb;}
    .ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div {line-height:100%;}
    a[x-apple-data-detectors]{
    color:inherit !important;
    text-decoration:none !important;
    font-size:inherit !important;
    font-family:inherit !important;
    font-weight:inherit !important;
    line-height:inherit !important;
    }
    body {-webkit-text-size-adjust:none; -ms-text-size-adjust:none;}
    body {margin:0; padding:0;}
    .yshortcuts a {border-bottom: none !important;}
    .rnb-del-min-width{ min-width: 0 !important; }
    /* Add new outlook css start */
    .templateContainer{
    max-width:590px !important;
    width:auto !important;
    }
    /* Add new outlook css end */
    /* Image width by default for 3 columns */
    img[class="rnb-col-3-img"] {
    max-width:170px;
    }
    /* Image width by default for 2 columns */
    img[class="rnb-col-2-img"] {
    max-width:264px;
    }
    /* Image width by default for 2 columns aside small size */
    img[class="rnb-col-2-img-side-xs"] {
    max-width:180px;
    }
    /* Image width by default for 2 columns aside big size */
    img[class="rnb-col-2-img-side-xl"] {
    max-width:350px;
    }
    /* Image width by default for 1 column */
    img[class="rnb-col-1-img"] {
    max-width:550px;
    }
    /* Image width by default for header */
    img[class="rnb-header-img"] {
    max-width:590px;
    }
    /* Ckeditor line-height spacing */
    .rnb-force-col p, ul, ol{margin:0px!important;}
    .rnb-del-min-width p, ul, ol{margin:0px!important;}
    /* tmpl-2 preview */
    .rnb-tmpl-width{ width:100%!important;}
    /* tmpl-11 preview */
    .rnb-social-width{padding-right:15px!important;}
    /* tmpl-11 preview */
    .rnb-social-align{float:right!important;}
    /* Ul Li outlook extra spacing fix */
    li{mso-margin-top-alt: 0; mso-margin-bottom-alt: 0;}
    /* Outlook fix */
    table {mso-table-lspace:0pt; mso-table-rspace:0pt;}
    /* Outlook fix */
    table, tr, td {border-collapse: collapse;}
    /* Outlook fix */
    p,a,li,blockquote {mso-line-height-rule:exactly;}
    /* Outlook fix */
    .msib-right-img { mso-padding-alt: 0 !important;}
    /* Fix text line height on preview */
    .content-spacing div {display: list-item; list-style-type: none;}
    @media only screen and (min-width:590px){
    /* mac fix width */
    .templateContainer{width:590px !important;}
    }
    @media screen and (max-width: 360px){
    /* yahoo app fix width "tmpl-2 tmpl-10 tmpl-13" in android devices */
    .rnb-yahoo-width{ width:360px !important;}
    }
    @media screen and (max-width: 380px){
    /* fix width and font size "tmpl-4 tmpl-6" in mobile preview */
    .element-img-text{ font-size:24px !important;}
    .element-img-text2{ width:230px !important;}
    .content-img-text-tmpl-6{ font-size:24px !important;}
    .content-img-text2-tmpl-6{ width:220px !important;}
    }
    @media screen and (max-width: 480px) {
    td[class="rnb-container-padding"] {
    padding-left: 10px !important;
    padding-right: 10px !important;
    }
    /* force container nav to (horizontal) blocks */
    td.rnb-force-nav {
    display: inherit;
    }
    /* fix text alignment "tmpl-11" in mobile preview */
    .rnb-social-text-left {
    width: 100%;
    text-align: center;
    margin-bottom: 15px;
    }
    .rnb-social-text-right {
    width: 100%;
    text-align: center;
    }
    }
    @media only screen and (max-width: 600px) {
    /* center the address &amp; social icons */
    .rnb-text-center {text-align:center !important;}
    /* force container columns to (horizontal) blocks */
    th.rnb-force-col {
    display: block;
    padding-right: 0 !important;
    padding-left: 0 !important;
    width:100%;
    }
    table.rnb-container {
    width: 100% !important;
    }
    table.rnb-btn-col-content {
    width: 100% !important;
    }
    table.rnb-col-3 {
    /* unset table align="left/right" */
    float: none !important;
    width: 100% !important;
    /* change left/right padding and margins to top/bottom ones */
    margin-bottom: 10px;
    padding-bottom: 10px;
    /*border-bottom: 1px solid #eee;*/
    }
    table.rnb-last-col-3 {
    /* unset table align="left/right" */
    float: none !important;
    width: 100% !important;
    }
    table.rnb-col-2 {
    /* unset table align="left/right" */
    float: none !important;
    width: 100% !important;
    /* change left/right padding and margins to top/bottom ones */
    margin-bottom: 10px;
    padding-bottom: 10px;
    /*border-bottom: 1px solid #eee;*/
    }
    table.rnb-col-2-noborder-onright {
    /* unset table align="left/right" */
    float: none !important;
    width: 100% !important;
    /* change left/right padding and margins to top/bottom ones */
    margin-bottom: 10px;
    padding-bottom: 10px;
    }
    table.rnb-col-2-noborder-onleft {
    /* unset table align="left/right" */
    float: none !important;
    width: 100% !important;
    /* change left/right padding and margins to top/bottom ones */
    margin-top: 10px;
    padding-top: 10px;
    }
    table.rnb-last-col-2 {
    /* unset table align="left/right" */
    float: none !important;
    width: 100% !important;
    }
    table.rnb-col-1 {
    /* unset table align="left/right" */
    float: none !important;
    width: 100% !important;
    }
    img.rnb-col-3-img {
    /**max-width:none !important;**/
    width:100% !important;
    }
    img.rnb-col-2-img {
    /**max-width:none !important;**/
    width:100% !important;
    }
    img.rnb-col-2-img-side-xs {
    /**max-width:none !important;**/
    width:100% !important;
    }
    img.rnb-col-2-img-side-xl {
    /**max-width:none !important;**/
    width:100% !important;
    }
    img.rnb-col-1-img {
    /**max-width:none !important;**/
    width:100% !important;
    }
    img.rnb-header-img {
    /**max-width:none !important;**/
    width:100% !important;
    margin:0 auto;
    }
    img.rnb-logo-img {
    /**max-width:none !important;**/
    width:100% !important;
    }
    td.rnb-mbl-float-none {
    float:inherit !important;
    }
    .img-block-center{text-align:center !important;}
    .logo-img-center
    {
    float:inherit !important;
    }
    /* tmpl-11 preview */
    .rnb-social-align{margin:0 auto !important; float:inherit !important;}
    /* tmpl-11 preview */
    .rnb-social-center{display:inline-block;}
    /* tmpl-11 preview */
    .social-text-spacing{margin-bottom:0px !important; padding-bottom:0px !important;}
    /* tmpl-11 preview */
    .social-text-spacing2{padding-top:15px !important;}
    /* UL bullet fixed in outlook */
    ul {mso-special-format:bullet;}
    }</style><!--[if gte mso 11]><style type="text/css">table{border-spacing: 0; }table td {border-collapse: separate;}</style><![endif]--><!--[if !mso]><!--><style type="text/css">table{border-spacing: 0;} table td {border-collapse: collapse;}</style> <!--<![endif]--><!--[if gte mso 15]><xml><o:OfficeDocumentSettings><o:AllowPNG/><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml><![endif]--><!--[if gte mso 9]><xml><o:OfficeDocumentSettings><o:AllowPNG/><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml><![endif]--></head>

<body charset="utf-8">
    <table border="0" align="center" width="100%" cellpadding="0" cellspacing="0" class="main-template" bgcolor="#f9fafc" style="background-color: rgb(249, 250, 252);">

    <tbody><tr style="display:none !important; font-size:1px; mso-hide: all;"><td></td><td></td></tr><tr>
        <td align="center" valign="top">
        <!--[if gte mso 9]>
                        <table align="center" border="0" cellspacing="0" cellpadding="0" width="590" style="width:590px;">
                        <tr>
                        <td align="center" valign="top" width="590" style="width:590px;">
                        <![endif]-->
            <table border="0" cellpadding="0" cellspacing="0" width="590" class="templateContainer" style="max-width:590px!important; width: 590px;">
        <tbody><tr>

        <td align="center" valign="top">

            <table class="rnb-del-min-width" width="100%" cellpadding="0" border="0" cellspacing="0" style="min-width:590px;" name="Layout_0" id="Layout_0">
                <tbody><tr>
                    <td class="rnb-del-min-width" valign="top" align="center" style="min-width:590px;">
                        <a href="#" name="Layout_0"></a>
                        <table width="100%" cellpadding="0" border="0" height="38" cellspacing="0">
                            <tbody><tr>
                                <td valign="top" height="38">
                                    <img width="20" height="38" style="display:block; max-height:38px; max-width:20px;" alt="" src="https://img.mailinblue.com/new_images/rnb/rnb_space.gif">
                                </td>
                            </tr>
                        </tbody></table>
                    </td>
                </tr>
            </tbody></table>
            </td>
    </tr><tr>

        <td align="center" valign="top">

            <div style="background-color: rgb(255, 255, 255); border-radius: 0px;">
                
                <!--[if mso]>
                <table align="center" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;">
                <tr>
                <![endif]-->
                
                <!--[if mso]>
                <td valign="top" width="590" style="width:590px;">
                <![endif]-->
            
                <table width="100%" cellpadding="0" border="0" cellspacing="0" name="Layout_" id="Layout_"><tbody><tr>
                    <td align="center" valign="top"><a href="#" name="Layout_"></a>
                        <table border="0" width="100%" cellpadding="0" cellspacing="0" class="rnb-container" bgcolor="#ffffff" style="height: 0px; background-color: rgb(255, 255, 255); border-bottom: 9px solid rgb(255, 145, 15); border-radius: 0px; border-collapse: separate; padding-left: 20px; padding-right: 20px;"><tbody><tr>
                                <td class="rnb-container-padding" style="font-size: px;font-family: ; color: ;">

                                    <table border="0" cellpadding="0" cellspacing="0" class="rnb-columns-container" align="center" style="margin:auto;">
                                        <tbody><tr>

                                            <th class="rnb-force-col" align="center" style="text-align: center; font-weight: normal">

                                                <table border="0" cellspacing="0" cellpadding="0" align="center" class="rnb-col-1">

                                                    <tbody><tr>
                                                        <td height="10"></td>
                                                    </tr>

                                                    <tr charset="utf-8">
                                                        <td charset="utf-8" class="content-spacing" style="font-family:"Tahoma",Geneva,sans-serif; color:#3c4858; text-align:center;">

                                                            <span charset="utf-8" style="color:#3c4858;"><span style="font-size: 24px;"><b charset="utf-8">Cambio de contrase&ntilde;a</b></span></span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td height="10"></td>
                                                    </tr>
                                                    </tbody></table>
                                                </th></tr>
                                    </tbody></table></td>
                            </tr>

                        </tbody></table>

                    </td>
                </tr>

            </tbody></table><!--[if mso]>
                </td>
                <![endif]-->
                
                <!--[if mso]>
                </tr>
                </table>
                <![endif]-->
            
        </div></td>
    </tr><tr>

        <td align="center" valign="top">

            <table class="rnb-del-min-width" width="100%" cellpadding="0" border="0" cellspacing="0" style="min-width:590px;" name="Layout_5011" id="Layout_5011">
                <tbody><tr>
                    <td class="rnb-del-min-width" valign="top" align="center" style="min-width:590px;">
                        <a href="#" name="Layout_5011"></a>
                        <table width="100%" cellpadding="0" border="0" height="38" cellspacing="0">
                            <tbody><tr>
                                <td valign="top" height="38">
                                    <img width="20" height="38" style="display:block; max-height:38px; max-width:20px;" alt="" src="https://img.mailinblue.com/new_images/rnb/rnb_space.gif">
                                </td>
                            </tr>
                        </tbody></table>
                    </td>
                </tr>
            </tbody></table>
            </td>
    </tr><tr>

        <td align="center" valign="top">

            <table class="rnb-del-min-width" width="100%" cellpadding="0" border="0" cellspacing="0" style="min-width:590px;" name="Layout_7" id="Layout_7">
                <tbody><tr>
                    <td class="rnb-del-min-width" valign="top" align="center" style="min-width:590px;">
                        <a href="#" name="Layout_7"></a>
                        <table width="100%" cellpadding="0" border="0" height="38" cellspacing="0">
                            <tbody><tr>
                                <td valign="top" height="38">
                                    <img width="20" height="38" style="display:block; max-height:38px; max-width:20px;" alt="" src="https://img.mailinblue.com/new_images/rnb/rnb_space.gif">
                                </td>
                            </tr>
                        </tbody></table>
                    </td>
                </tr>
            </tbody></table>
            </td>
    </tr><tr>

        <td align="center" valign="top">

            <div style="background-color: rgb(255, 255, 255); border-radius: 0px;">
            
                <!--[if mso]>
                <table align="center" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;">
                <tr>
                <![endif]-->
                
                <!--[if mso]>
                <td valign="top" width="590" style="width:590px;">
                <![endif]-->
                <table class="rnb-del-min-width" width="100%" cellpadding="0" border="0" cellspacing="0" style="min-width:100%;" name="Layout_9">
                <tbody><tr>
                    <td class="rnb-del-min-width" align="center" valign="top">
                        <a href="#" name="Layout_9"></a>
                        <table width="100%" border="0" cellpadding="0" cellspacing="0" class="rnb-container" bgcolor="#ffffff" style="background-color: rgb(255, 255, 255); padding-left: 20px; padding-right: 20px; border-collapse: separate; border-radius: 0px; border-bottom: 0px none rgb(200, 200, 200);">

                                        <tbody><tr>
                                            <td height="20" style="font-size:1px; line-height:0px; mso-hide: all;">&nbsp;</td>
                                        </tr>
                                        <tr>
                                            <td valign="top" class="rnb-container-padding" align="left">

                                                <table width="100%" border="0" cellpadding="0" cellspacing="0" class="rnb-columns-container">
                                                    <tbody><tr>
                                                        <th class="rnb-force-col" style="text-align: left; font-weight: normal; padding-right: 0px;" valign="top">

                                                            <table border="0" valign="top" cellspacing="0" cellpadding="0" width="100%" align="left" class="rnb-col-1">

                                                                <tbody><tr>
                 <td class="content-spacing" style="font-size:14px; font-family:Arial,Helvetica,sans-serif, sans-serif; color:#3c4858; line-height: 21px;"><div><span style="color:#000000;"><span style="font-size:15px;">Hola </span></span><span style="font-weight:bold;color:black;">'.ucwords($row["nombre"])." ".ucwords ($row["apellido"]).'</span><span style="color:#000000;"><span style="font-size:15px;">, hemos cambiado su contraseña correctamente. Si usted no realizó esta acción, entrar al siguiente link...</span></span></div>
</td>
                                                                </tr>
                                                                </tbody></table>

                                                            </th></tr>
                                                </tbody></table></td>
                                        </tr>
                                        <tr>
                                            <td height="20" style="font-size:1px; line-height:0px; mso-hide: all;">&nbsp;</td>
                                        </tr>
                                    </tbody></table>
                    </td>
                </tr>
            </tbody></table><!--[if mso]>
                </td>
                <![endif]-->
                
                <!--[if mso]>
                </tr>
                </table>
                <![endif]-->

            </div></td>
    </tr><tr>

        <td align="center" valign="top">

            <div style="background-color: rgb(255, 255, 255); border-radius: 0px;">
                
                <!--[if mso]>
                <table align="center" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;">
                <tr>
                <![endif]-->
                
                <!--[if mso]>
                <td valign="top" width="590" style="width:590px;">
                <![endif]-->
                <table class="rnb-del-min-width" width="100%" cellpadding="0" border="0" cellspacing="0" style="min-width:590px;" name="Layout_8" id="Layout_8">
                <tbody><tr>
                    <td class="rnb-del-min-width" align="center" valign="top" style="min-width:590px;">
                        <a href="#" name="Layout_8"></a>
                        <table width="100%" border="0" cellpadding="0" cellspacing="0" class="mso-button-block rnb-container" style="background-color: rgb(255, 255, 255); border-radius: 0px; padding-left: 20px; padding-right: 20px; border-collapse: separate;">
                            <tbody><tr>
                                <td height="20" style="font-size:1px; line-height:0px; mso-hide: all;">&nbsp;</td>
                            </tr>
                            <tr>
                                <td valign="top" class="rnb-container-padding" align="left">

                                    <table width="100%" border="0" cellpadding="0" cellspacing="0" class="rnb-columns-container">
                                        <tbody><tr>
                                            <th class="rnb-force-col" valign="top">

                                                <table border="0" valign="top" cellspacing="0" cellpadding="0" width="550" align="center" class="rnb-col-1">

                                                    <tbody><tr>
                                                        <td valign="top">
                                                            <table cellpadding="0" border="0" align="center" cellspacing="0" class="rnb-btn-col-content" style="margin:auto; border-collapse: separate;">
                                                                <tbody><tr>
                                                                    <td width="auto" valign="middle" bgcolor="#ff7e21" align="center" height="39" style="font-size:20px; font-family:"Tahoma",Geneva,sans-serif; color:#000000; font-weight:normal;
                                                                    padding:5px; padding-left:20px; padding-right:20px; vertical-align: middle; background-color:#ff7e21;border-radius:8px;border-top:1px Solid #000000;border-right:1px Solid #000000;border-bottom:1px Solid #000000;border-left:1px Solid #000000;">
                                                                        <span style="color:#000000; font-weight:normal;">
<a style="text-decoration:none; color:#000000; font-weight:normal;" target="_blank" 

    href="http://localhost/RecetaRapi/olvido de contraseña/Olvidaste tu Contraseña.php"><strong style="padding:15px;border-radius:5%;"> Recuperar </strong></a>







                                                                            </span>
                                                                    </td>
                                                                </tr></tbody></table>
                                                        </td>
                                                    </tr>
                                                    </tbody></table>
                                                </th>
                                        </tr>
                                    </tbody></table></td>
                            </tr>
                            <tr>
                                <td height="20" style="font-size:1px; line-height:0px; mso-hide: all;">&nbsp;</td>
                            </tr>
                        </tbody></table>

                    </td>
                </tr>
            </tbody></table>
            <!--[if mso]>
                </td>
                <![endif]-->
                
                <!--[if mso]>
                </tr>
                </table>
                <![endif]-->
                
            </div></td>
    </tr><tr>

        <td align="center" valign="top">

            <table class="rnb-del-min-width" width="100%" cellpadding="0" border="0" cellspacing="0" style="min-width:590px;" name="Layout_5" id="Layout_5">
                <tbody><tr>
                    <td class="rnb-del-min-width" valign="top" align="center" style="min-width:590px;">
                        <a href="#" name="Layout_5"></a>
                        <table width="100%" cellpadding="0" border="0" height="38" cellspacing="0">
                            <tbody><tr>
                                <td valign="top" height="38">
                                    <img width="20" height="38" style="display:block; max-height:38px; max-width:20px;" alt="" src="https://img.mailinblue.com/new_images/rnb/rnb_space.gif">
                                </td>
                            </tr>
                        </tbody></table>
                    </td>
                </tr>
            </tbody></table>
            </td>
    </tr><tr>

        <td align="center" valign="top">

            <table class="rnb-del-min-width" width="100%" cellpadding="0" border="0" cellspacing="0" style="min-width:590px;" name="Layout_" id="Layout_">
                <tbody><tr>
                    <td class="rnb-del-min-width" valign="top" align="center" style="min-width:590px;">
                        <a href="#" name="Layout_"></a>
                        <table width="100%" cellpadding="0" border="0" height="30" cellspacing="0">
                            <tbody><tr>
                                <td valign="top" height="30">
                                    <img width="20" height="30" style="display:block; max-height:30px; max-width:20px;" alt="" src="https://img.mailinblue.com/new_images/rnb/rnb_space.gif">
                                </td>
                            </tr>
                        </tbody></table>
                    </td>
                </tr>
            </tbody></table>
            </td>
    </tr><tr>

        <td align="center" valign="top">

            <div style="background-color: rgb(255, 186, 84); border-radius: 0px;">
            
                <!--[if mso]>
                <table align="center" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;">
                <tr>
                <![endif]-->
                
                <!--[if mso]>
                <td valign="top" width="590" style="width:590px;">
                <![endif]-->
                <table class="rnb-del-min-width" width="100%" cellpadding="0" border="0" cellspacing="0" style="min-width:100%;" name="Layout_13">
                <tbody><tr>
                    <td class="rnb-del-min-width" align="center" valign="top">
                        <a href="#" name="Layout_13"></a>
                        <table width="100%" border="0" cellpadding="0" cellspacing="0" class="rnb-container" bgcolor="#ffba54" style="background-color: rgb(255, 186, 84); padding-left: 20px; padding-right: 20px; border-collapse: separate; border-radius: 0px; border-bottom: 0px none rgb(200, 200, 200);">

                                        <tbody><tr>
                                            <td height="20" style="font-size:1px; line-height:0px; mso-hide: all;">&nbsp;</td>
                                        </tr>
                                        <tr>
                                            <td valign="top" class="rnb-container-padding" align="left">

                                                <table width="100%" border="0" cellpadding="0" cellspacing="0" class="rnb-columns-container">
                                                    <tbody><tr>
                                                        <th class="rnb-force-col" style="text-align: left; font-weight: normal; padding-right: 0px;" valign="top">

                                                            <table border="0" valign="top" cellspacing="0" cellpadding="0" width="100%" align="left" class="rnb-col-1">

                                                                <tbody><tr>
</td>
                                                                    <td class="content-spacing" style="font-size:14px; font-family:"Tahoma",Geneva,sans-serif, sans-serif; color:#3c4858; line-height: 21px;"><div style="text-align: center;"><span style="font-size:15px;"><span style="color:#000000;"><strong>En caso de  haber realizado esta petición hacer caso omiso.</strong></span></span></div>
                                                                </tr>
                                                                </tbody></table>

                                                            </th></tr>
                                                </tbody></table></td>
                                        </tr>
                                        <tr>
                                            <td height="20" style="font-size:1px; line-height:0px; mso-hide: all;">&nbsp;</td>
                                        </tr>
                                    </tbody></table>
                    </td>
                </tr>
            </tbody></table><!--[if mso]>
                </td>
                <![endif]-->
                
                <!--[if mso]>
                </tr>
                </table>
                <![endif]-->

            </div></td>
    </tr><tr>

        <td align="center" valign="top">

            <div style="background-color: rgb(255, 123, 0);">
                
                <table class="rnb-del-min-width rnb-tmpl-width" width="100%" cellpadding="0" border="0" cellspacing="0" style="min-width:590px;" name="Layout_" id="Layout_">
                    <tbody><tr>
                        <td class="rnb-del-min-width" align="center" valign="top" bgcolor="#ff7b00" style="min-width: 590px; background-color: rgb(255, 123, 0);">
                            <a href="#" name="Layout_"></a>
                            <table width="590" class="rnb-container" cellpadding="0" border="0" align="center" cellspacing="0">
                                <tbody><tr>
                                    <td height="20" style="font-size:1px; line-height:0px; mso-hide: all;">&nbsp;</td>
                                </tr>
                                <tr>
                                    <td valign="top" class="rnb-container-padding" style="font-size: 14px; font-family: Arial,Helvetica,sans-serif; color: #888888;" align="left">

                                        <table width="100%" border="0" cellpadding="0" cellspacing="0" class="rnb-columns-container">
                                            <tbody><tr>
                                                <th class="rnb-force-col" style="padding-right:20px; padding-left:20px; mso-padding-alt: 0 0 0 20px; font-weight: normal;" valign="top">

                                                    <table border="0" valign="top" cellspacing="0" cellpadding="0" width="264" align="left" class="rnb-col-2 rnb-social-text-left" style="border-bottom:0;">

                                                        <tbody><tr>
                                                            <td valign="top">
                                                                <table cellpadding="0" border="0" align="left" cellspacing="0" class="rnb-btn-col-content">
                                                                    <tbody><tr>
                                                                        <td valign="middle" align="left" style="font-size:14px; font-family:Arial,Helvetica,sans-serif; color:#888888; line-height: 16px" class="rnb-text-center">
                                                                            <div><div><span style="color:#000000;"></span><a href="#" style="text-decoration: underline; color: rgb(102, 102, 102);"><span style="color:#000000;">rapireceta@gmail.com</span></a><a href="#" style="text-decoration: none; color: rgb(102, 102, 102);"><span style="color:#000000;"></span></a></div>
    </div>
                                                                        </td></tr>
                                                                </tbody></table>
                                                            </td>
                                                        </tr>
                                                        </tbody></table>
                                                    </th><th ng-if="item.text.align==left" class="rnb-force-col rnb-social-width" valign="top" style="mso-padding-alt: 0 20px 0 0; padding-right: 15px;">

    <table border="0" valign="top" cellspacing="0" cellpadding="0" width="246" align="right" class="rnb-last-col-2">

                                                        <tbody><tr>
                                                            <td valign="top">
                                                                <table cellpadding="0" border="0" cellspacing="0" class="rnb-social-align" style="float: right;" align="right">
                                                                    <tbody><tr>
                                                                        <td valign="middle" class="rnb-text-center" ng-init="width=setSocialIconsBlockWidth(item)" width="125" align="right">
                                                                            <div class="rnb-social-center">
                                                                            <table align="left" style="float:left; display: inline-block" border="0" cellpadding="0" cellspacing="0">
                                                                            <tbody><tr>
                                                                                    <td style="padding:0px 5px 5px 0px; mso-padding-alt: 0px 2px 5px 0px;" align="left">
                                                                            <span style="color:#ffffff; font-weight:normal;">
    <img alt="Facebook" border="0" hspace="0" vspace="0" style="vertical-align:top;" target="_blank" src="https://img.mailinblue.com/new_images/rnb/theme1/rnb_ico_fb.png"></span>
                                                                            </td></tr></tbody></table>
                                                                            </div><div class="rnb-social-center">
                                                                            <table align="left" style="float:left; display: inline-block" border="0" cellpadding="0" cellspacing="0">
                                                                            <tbody><tr>
                                                                                    <td style="padding:0px 5px 5px 0px; mso-padding-alt: 0px 2px 5px 0px;" align="left">
    <span style="color:#ffffff; font-weight:normal;">
                     <img alt="Twitter" border="0" hspace="0" vspace="0" style="vertical-align:top;" target="_blank" src="https://img.mailinblue.com/new_images/rnb/theme1/rnb_ico_tw.png"></span>
                                                                            </td></tr></tbody></table>
                                                                            </div><div class="rnb-social-center">
                                                                            <table align="left" style="float:left; display: inline-block" border="0" cellpadding="0" cellspacing="0">
                                                                            <tbody><tr>
                                                                                    <td style="padding:0px 5px 5px 0px; mso-padding-alt: 0px 2px 5px 0px;" align="left">
                                                                            <span style="color:#ffffff; font-weight:normal;">
    <img alt="Instagram" border="0" hspace="0" vspace="0" style="vertical-align:top;" target="_blank" src="https://img.mailinblue.com/new_images/rnb/theme1/rnb_ico_ig.png"></span>
                                                                            </td></tr></tbody></table>
                                                                            </div></td>
</tr>
 </tbody></table>
                                                            </td>
                                                        </tr>
                                                        </tbody></table>
                                                    </th></tr>
                                        </tbody></table></td>
                                </tr>
                                 <tr>
                                    <td height="20" style="font-size:1px; line-height:0px; mso-hide: all;">&nbsp;</td>
                                </tr>
                            </tbody></table>

                        </td>
                    </tr></tbody></table>
                
            </div></td>
    </tr><tr>

        <td align="center" valign="top">

            <div style="background-color: rgb(249, 250, 252);">
                
                <table class="rnb-del-min-width rnb-tmpl-width" width="100%" cellpadding="0" border="0" cellspacing="0" style="min-width:590px;" name="Layout_4" id="Layout_4">
                    <tbody><tr>
                        <td class="rnb-del-min-width" align="center" valign="top" style="min-width:590px;">
                            <a href="#" name="Layout_4"></a>
                            <table width="100%" cellpadding="0" border="0" align="center" cellspacing="0" bgcolor="#f9fafc" style="padding-right: 20px; padding-left: 20px; background-color: rgb(249, 250, 252);">
                                <tbody><tr>
                                    <td height="20" style="font-size:1px; line-height:0px; mso-hide: all;"></td>
                                </tr>
                                <tr>
                                    <td style="font-size:14px; color:#888888; font-weight:normal; text-align:center; font-family:Arial,Helvetica,sans-serif;">
                                        <div><div charset="utf-8">&#xa9; 2020 Rapi Receta</div>
</div>
                                    </td></tr>
                                <tr>
                                    <td height="20" style="font-size:1px; line-height:0px; mso-hide: all;"></td>
                                </tr>
                            </tbody></table>
                        </td>
                    </tr>
                </tbody></table>
                
            </div></td>
    </tr></tbody></table>
            <!--[if gte mso 9]>
                        </td>
                        </tr>
                        </table>
                        <![endif]-->
                        </td>
        </tr>
        </tbody></table>

</body></html>'
    );

    // "Hola ".ucwords($row["nombre"])." ".ucwords($row["apellido"]).", haz solicitado cambiar tu contraseña, ingresa al siguiente link ".
                    
    // "https://localhost/RecetaRapi/olvido%20de%20contrase%c3%b1a/recuperar%20clave.php?user=".$row["nombre"].$row["apellido"]."$token";
$errormensaje='null';
$correcto='correcto';


    $mail->send();
    echo "$correcto";
} catch (Exception $e) {
    echo "$errormensaje", $mail->ErrorInfo;
}       

?>
</body>
</html>