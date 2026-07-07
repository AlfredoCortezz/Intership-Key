@REM ----------------------------------------------------------------------------
@REM Apache Maven Wrapper startup batch script
@REM ----------------------------------------------------------------------------
@IF "%__MVNW_ARG0_NAME__%"=="" (SET __MVNW_ARG0_NAME__=%~nx0)
@SET %%x=

@setlocal
@SET MAVEN_PROJECTBASEDIR=%~dp0

@SET WRAPPER_JAR=%MAVEN_PROJECTBASEDIR%.mvn\wrapper\maven-wrapper.jar
@SET WRAPPER_LAUNCHER=org.apache.maven.wrapper.MavenWrapperMain

@IF NOT EXIST "%WRAPPER_JAR%" (
  ECHO Downloading maven-wrapper.jar...
  curl -fsSL -o "%WRAPPER_JAR%" "https://repo.maven.apache.org/maven2/org/apache/maven/wrapper/maven-wrapper/3.3.2/maven-wrapper-3.3.2.jar"
)

@java %MAVEN_OPTS% -classpath "%WRAPPER_JAR%" %JVMFLAGS% %WRAPPER_LAUNCHER% %MAVEN_CONFIG% %*
@endlocal
