import gulp from 'gulp';
import nunjucks from 'nunjucks';
import gulpNunjucks from 'gulp-nunjucks';
import sass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';
import concat from 'gulp-concat';
import autoprefixer from 'gulp-autoprefixer';
import babel from 'gulp-babel';
import browserSync from 'browser-sync';
import data from 'gulp-data';
import rename from 'gulp-simple-rename';
import merge from 'merge2';
import markdown from 'nunjucks-markdown';
import marked from 'marked'
import reload from 'require-reload'
import npmDist from'gulp-npm-dist';




// var templates = 'src/templates'; //Set this as the folder that contains your nunjuck files

const env = new nunjucks.Environment(new nunjucks.FileSystemLoader('./src/templates'));

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: true,
  pendantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false
});
// // The second argument can be any function that renders markdown
markdown.register(env, marked);
// getData = () => {
//   return require('src/data/site.json');
// };

gulp.task('extraDependancies', () =>
  gulp.src(npmDist(), {base:'./node_modules'})
    .pipe(gulp.dest('./dist/scripts/lib'))
);

// Copy files to dist
gulp.task('copy', () =>
  gulp.src([
    'src/assets/**/*'
  ], {
    dot: true
  }).pipe(gulp.dest('dist/assets'))
);

// Compile scss, sourcemaps, concat, autoprefix
gulp.task('styles', () =>
  gulp.src('src/styles/**/main.+(scss|sass|css)')
    // .pipe(sourcemaps.init())
    .pipe(sass())
    // .pipe(sourcemaps.write())
    .pipe(concat('main.css'))
    .pipe(autoprefixer())
    .pipe(gulp.dest('dist/styles'))
);

// Compile es6, sourcemaps, concat
gulp.task('scripts', () =>
  gulp.src('src/scripts/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(concat('main.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/scripts'))
);

// gulp.task('prebuild', () => {
//   let siteData = reload('./src/data/site.json')
//   return merge(
//    Object.values(siteData.pages).map(page => 
//       gulp.src(`src/templates/${page.template}.html`)
//         .pipe(rename(() => 'index.html'))
//         .pipe(gulp.dest('.tmp/pages/'+page.slug))
//       )
//   )
// })

gulp.task('build', ['copy'], () => {
  let siteData = reload('./src/data/site.json')

  let collections = {}
  Object.values(siteData.pages).forEach((page) => {
    if(page.collections){
      page.collections.forEach((collection) => {
        if(!collections[collection]){
          collections[collection] = [page]
          page[`${collection}Index`] = 0;
        }else{
          page[`${collection}Index`] = collections[collection].push(page)-1;
        }
        // console.log(page.projects-index)
      })

    }
  })

  // console.log()

  // console.log(collections)
  siteData.shared.collections = collections


  return merge(
    Object.values(siteData.pages).map(page => 
      gulp.src(`src/templates/${page.template}.html`)
        .pipe(rename(() => 'index.html'))
        .pipe(data(() => Object.assign(page, siteData.shared)))
        .pipe(gulpNunjucks.compile('', {env: env}))
        .pipe(gulp.dest(`dist/${page.slug}`))
      )
  )


  // return gulp.src(['src/pages/**/*.+(html|nunjucks)', '.tmp/pages/**/*.+(html|nunjucks)'])
  //   .pipe(data( (file) => {
  //     console.log(file.relative)
  //     // let name = file.relative.replace('/index.html', '');
  //     // console.log(name)
      
  //     // if(name === 'index.html'){
  //     //   return siteData
  //     // }else{
  //     //   return siteData.projects[name]
  //     // }
  //   }))
  //   .pipe(gulpNunjucks.compile('', {env: env}))
  //   .pipe(gulp.dest('dist'))
});




gulp.task('serve', ['build', 'styles', 'scripts', 'copy', 'extraDependancies'], () => {
  browserSync({
    server: 'dist',
    port: 3000
  })

  gulp.watch(['src/pages/**/*', 'src/data/**/*', 'src/templates/**/*'], ['build', browserSync.reload]);
  gulp.watch(['src/styles/**/*.+(scss|sass|css)'], ['styles', browserSync.reload]);
  gulp.watch(['src/scripts/**/*.js'], ['scripts', browserSync.reload]);
});


gulp.task('default', ['build', 'styles', 'scripts', 'extraDependancies']);