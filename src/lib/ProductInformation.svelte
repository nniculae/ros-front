<script lang="ts">
	export let id: string;
</script>

<div {id} class="modal" tabindex="-1">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<h5 class="modal-title">More product information</h5>
				<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" />
			</div>
			<div class="modal-body">
				<p><slot /></p>
			</div>
		</div>
	</div>
</div>
