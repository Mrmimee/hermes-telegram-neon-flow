Set shell = CreateObject("WScript.Shell")
cmd = """" & Replace(WScript.ScriptFullName, "Start Telegram Neon Flow.vbs", "start-telegram-neon-flow.cmd") & """"
shell.Run cmd, 0, False
Set shell = Nothing
