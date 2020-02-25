"C:\Program Files\Mendix\8.6.0.715\modeler\mxbuild.exe" ^
  --native-packager ^
  --enable-call-microflow-from-nanoflow ^
  --java-home "C:\Program Files\AdoptOpenJDK\jdk-11.0.3.7-hotspot" ^
  --java-exe-path "C:\Program Files\AdoptOpenJDK\jdk-11.0.3.7-hotspot\bin\java.exe" ^
  "widget\dist\MxTestProject\App.mpr"

copy ^
  "widget\dist\MxTestProject\deployment\native\bundle\android\assets\index.android.bundle" ^
  "native-template\android\app\src\main\assets\index.android.bundle"

copy ^
  "widget\dist\MxTestProject\deployment\native\bundle\android\res" ^
  "native-template\android\app\src\main\res"