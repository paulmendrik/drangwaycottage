<template>
<div class="uk-overflow-auto">
<table class="uk-table uk-table-striped uk-margin-large-bottom">
<thead>
<tr>
<th>Month</th>
<th>Week</th>
<th>Price</th>
<th>Week</th>
<th>Price</th>
<th>Week</th>
<th>Price</th>
<th>Week</th>
<th>Price</th>
<th>Week</th>
<th>Price</th>
</tr>
</thead>
<tbody>
<tr  v-for="(item, i) in slice.items" :key="i" >
<td><prismic-rich-text :field="item.month"/></td>
<td><prismic-rich-text :field="item.week01"/></td>
<td><prismic-rich-text :field="item.price01"/></td>
<td><prismic-rich-text :field="item.week02"/></td>
<td><prismic-rich-text :field="item.price02"/></td>
<td><prismic-rich-text :field="item.week03"/></td>
<td><prismic-rich-text :field="item.price03"/></td>
<td><prismic-rich-text :field="item.week04"/></td>
<td><prismic-rich-text :field="item.price04"/></td>
<td><prismic-rich-text :field="item.week05"/></td>
<td><prismic-rich-text :field="item.price05"/></td>
</tr>
</tbody>
</table>
</div>
</template>

<script>
export default {
  props: ['slice'],
  name: 'Table'
}
</script>



