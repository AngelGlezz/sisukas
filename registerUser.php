<?php
    include_once("config.inc.php");
    include_once("libraries/phpmailer/class.phpmailer.php");
	include_once("libraries/phpmailer/class.smtp.php");
    $return = new stdClass;
        $return->error = '';

        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            if(!empty($_POST) && (!empty($_POST['name']))){

                $name = utf8_decode($_POST['name']);
                $lastname = utf8_decode($_POST['lastname']);
                $email = utf8_decode($_POST['email']);
                $message = utf8_decode($_POST['message']);

                if($_POST['name'] != ""){
                    $name = utf8_decode($_POST['name']);
                }
                
                if($_POST['lastname'] != ""){
                    $lastname = utf8_decode($_POST['lastname']);
                }
                
                if($_POST['email'] != ""){
                    $email = utf8_decode($_POST['email']);
                }

                $message = utf8_decode($_POST['message']);

                $_sendTo = array(
                    array(
                        "name" => $name." ".$lastname,
                        "mail" => $email
                    )
                );

                    $mysqli = mysqli_init();
                    if (@$mysqli) {
                        if (@$mysqli->options(MYSQLI_OPT_CONNECT_TIMEOUT, 5)) {
                            if (@$mysqli->real_connect($_dbHost, $_dbUser, $_dbPass, $_dbBase, $_dbPort)){
                                if ($stmt = $mysqli->prepare("INSERT INTO register (name, lastname, email, message) VALUES (?, ?, ?, ?)")){
                                    $stmt->bind_param("ssss", $name, $lastname, $email, $message);
                                    if ($stmt->execute()) {
                                        $phpmail = new PHPMailer(true);
                                        $phpmail->isSendmail();
                                        
                                        if(!empty($_smtpHost) && !empty($_smtpPort) && !empty($_smtpUser) && !empty($_smtpPass) && !empty($_smtpSecure)){
                                            $phpmail->IsSMTP();
                                            $phpmail->Host = $_smtpHost; 
                                            $phpmail->Port = $_smtpPort;
                                            $phpmail->Username = $_smtpUser;
                                            $phpmail->Password = $_smtpPass;
                                            $phpmail->SMTPAuth = $_smtpAuth;
                                            $phpmail->SMTPSecure = $_smtpSecure;
                                        }
                                        
                                        try {
                                            $phpmail->setFrom($_mailNoReplay, $_nameNoReplay);
                                            foreach ($_sendTo as $address) {
                                                $phpmail->addAddress($address["mail"], $address["name"]);
                                            }
                
                                            $phpmail->Subject = 'Registro Exitoso';
                
                                            $html = preg_replace('/[\\\\]/i', "", file_get_contents("templates/register.html"));
                                            
                                            $html = str_replace(
                                                array("{name}", "{lastname}", "{email}", "{message}"),
                                                array($name, $lastname, $email, $message),
                                                $html
                                            );
                
                                            $phpmail->isHTML(true); 
                                            $phpmail->msgHTML($html);
                                            $phpmail->AltBody = strip_tags($html);
                
                                            if(!@$phpmail->send()){
                                                $json["mail"] = 'Error '.$phpmail->ErrorInfo;
                                            }else{
                                                $json["mail"] = 'Send';
                                            }
                                        } catch (Exception $e) {
                                            $return->mail = $e->getMessage();
                                        }
                                    }
                                }
                                $mysqli->close();
                            } else {
                                $return->error = 'Invalid data';
                            }
                        } else {
                            $return->error = 'Invalid data';
                        }
                    } else {
                        $return->error = 'Invalid data';
                    }
                    echo json_encode($return);
            }else{
                $return->error = 'Invalid data';
                echo json_encode($return);
            }
        }
?>