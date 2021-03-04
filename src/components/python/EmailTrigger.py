import smtplib, ssl

def emailTrigger(rec,comment):
    smtp_server = 'smtp.gmail.com'
    port = 465
    sender = 'rohithpotluri02@gmail.com'
    password = input("Enter password: ")
    receiver = "achyuth.varma1@gmail.com"
    Comment = "hiii"

    message = """\
    Subject: Thanks for the interest.
    Hello there!

    This is Rohith Potluri, Thanks upon visiting my portfolio! Hope you liked it.

    Regards
    Rohith Potluri

    This is an auto-triggered, secured Email.

    """

    context = ssl.create_default_context()
    with smtplib.SMTP_SSL(smtp_server, port, context=context) as server:
        server.login(sender, password)
        print("Sent!")
        server.sendmail(sender, receiver, message)
