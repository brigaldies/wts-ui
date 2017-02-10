@echo off

REM --------------------------------------------------------
REM This Windows batch file can be used to deploy the WTS-UI
REM distribution files (Built with "ng build --prod") to a
REM local Tomcat install.
REM
REM Usage: deploy-wts-ui
REM --------------------------------------------------------

IF NOT DEFINED WTS_UI_LOCAL_DEV_HOME       goto varErrors
IF NOT DEFINED CATALINA_HOME               goto varErrors
IF NOT DEFINED WTS_UI_LOCAL_DEPLOY_HOME    goto varErrors

set wts-ui-local-dev=%WTS_UI_LOCAL_DEV_HOME%
set tomcat-install=%CATALINA_HOME%
set wts-ui-install=%WTS_UI_LOCAL_DEPLOY_HOME%

echo Deploying WTS_UI from %wts-ui-local-dev%\dist to %wts-ui-install%
REM Get user's confirmation
pause

REM --------------------------------------------------------
REM Shutdown Tomcat
REM --------------------------------------------------------
echo Shutdown Tomcat
echo on
call %tomcat-install%\bin\shutdown
echo ERRORLEVEL=%ERRORLEVEL%
IF NOT ERRORLEVEL 0 echo Warning: Tomcat was not shutdown successfully. Proceeding...
@echo off

REM --------------------------------------------------------
REM Build the war
REM --------------------------------------------------------
echo Build WTS-UI war file
echo on
cd %wts-ui-local-dev%
call ng build --prod --base-href /wts-ui/
@echo off

REM --------------------------------------------------------
REM Cleanup the deployment directory;
REM Copy the war file;
REM And explode the war file.
REM --------------------------------------------------------
echo on
del /S /Q %wts-ui-install%\wts-ui\*.*
xcopy %wts-ui-local-dev%\dist %wts-ui-install%\wts-ui\.
@echo off

REM --------------------------------------------------------
REM Cleanup Tomcat's "work" area
REM --------------------------------------------------------
echo on
rmdir /S /Q %tomcat-install%\work\Catalina\localhost\wts-ui
@echo off

REM --------------------------------------------------------
REM Start Tomcat
REM --------------------------------------------------------
echo Start Tomcat
echo on
call %tomcat-install%\bin\startup
@echo off

REM --------------------------------------------------------
REM We're done!
REM --------------------------------------------------------
echo Deployment of %wts-ui-local-dev%\dist completed on %date% at %time%
REM Get user's confirmation
pause
goto endScript

:varErrors
echo Error: Some environment variables are not set
IF DEFINED WTS_UI_LOCAL_DEV_HOME (echo WTS_UI_LOCAL_DEV_HOME=%WTS_UI_LOCAL_DEV_HOME%) ELSE (echo WTS_UI_LOCAL_DEV_HOME is not defined)
IF DEFINED CATALINA_HOME (echo CATALINA_HOME=%CATALINA_HOME%) ELSE (echo CATALINA_HOME is not defined)
IF DEFINED WTS_UI_LOCAL_DEPLOY_HOME (echo WTS_UI_LOCAL_DEPLOY_HOME=%WTS_UI_LOCAL_DEPLOY_HOME%) ELSE (echo WTS_UI_LOCAL_DEPLOY_HOME is not defined)
goto endScript

:usage
echo Error: Please use the command usage below:
echo Usage: deploy-fdss version-to-deploy
goto endScript

:endScript
cd %wts-ui-local-dev%\deployment\local
echo Script completed.
