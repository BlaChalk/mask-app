<template>
  <div class="aside-menu">
    <div class="wraps">
      <label>
        縣市：<select><option>台北市</option></select>
      </label>
      <label>
        行政區：<select><option>北投區</option></select>
      </label>
    </div>

    <div class="wraps">
      <label>
        <i class="fas fa-search-location"></i> 關鍵字搜尋：
        <input type="text" placeholder="請輸入關鍵字">
      </label>
    </div>

    <ul class="store-lists">
      <li class="store-info wraps">
        <h1>ＸＸ藥局</h1>

        <div class="mask-info">
          <i class="fas fa-head-side-mask"></i>
          <span>大人口罩: 100 個</span>
        </div>

        <div class="mask-info">
          <i class="fas fa-baby"></i>
          <span>兒童口罩: 100 個</span>
        </div>

        <div class="mask-info">
          最後更新時間:
        </div>

        <button class="btn-store-detail">
          <i class="fas fa-info-circle"></i>
          看詳細資訊
        </button>
      </li>
      <li class="store-info wraps">
        <h1>ＸＸ藥局</h1>

        <div class="mask-info">
          <i class="fas fa-head-side-mask"></i>
          <span>大人口罩: 100 個</span>
        </div>

        <div class="mask-info">
          <i class="fas fa-baby"></i>
          <span>兒童口罩: 100 個</span>
        </div>

        <div class="mask-info">
          最後更新時間:
        </div>

        <button class="btn-store-detail">
          <i class="fas fa-info-circle"></i>
          看詳細資訊
        </button>
      </li>
      <li class="store-info wraps">
        <h1>ＸＸ藥局</h1>

        <div class="mask-info">
          <i class="fas fa-head-side-mask"></i>
          <span>大人口罩: 100 個</span>
        </div>

        <div class="mask-info">
          <i class="fas fa-baby"></i>
          <span>兒童口罩: 100 個</span>
        </div>

        <div class="mask-info">
          最後更新時間:
        </div>

        <button class="btn-store-detail">
          <i class="fas fa-info-circle"></i>
          看詳細資訊
        </button>
      </li>
    </ul>

  </div>
</template>

<script>
export default {
  name: 'asideMenu',
}
</script>