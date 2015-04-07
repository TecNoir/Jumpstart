<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Formular.aspx.cs" Inherits="Tag3.Formular" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Formularauswertung</title>
</head>
<body>
    Serverseitige ASP Formularauswertung<br />
    <%
        // Auswertung Get-Array -> bei method="get"
        Response.Write(Request.QueryString["a"] + "<br />");
        Response.Write(Request.QueryString["b"] + "<br />");
        Response.Write(Request.QueryString["c"] + "<br />");       
        
        // Auswertung Post-Array -> bei method="post"
        Response.Write(Request.Form["a"] + "<br />");
        Response.Write(Request.Form["b"] + "<br />");
        Response.Write(Request.Form["c"] + "<br />");         
    %>
</body>
</html>
